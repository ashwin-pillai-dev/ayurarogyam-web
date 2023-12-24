"use strict";
exports.id = 7320;
exports.ids = [7320];
exports.modules = {

/***/ 77320:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApolloServerPluginCacheControl: () => (/* binding */ ApolloServerPluginCacheControl)
/* harmony export */ });
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41327);
/* harmony import */ var _cachePolicy_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4703);
/* harmony import */ var _internalPlugin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43854);
/* harmony import */ var lru_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78532);




function ApolloServerPluginCacheControl(options = Object.create(null)) {
    let typeAnnotationCache;
    let fieldAnnotationCache;
    return (0,_internalPlugin_js__WEBPACK_IMPORTED_MODULE_0__/* .internalPlugin */ .U)({
        __internal_plugin_id__: "CacheControl",
        __is_disabled_plugin__: false,
        async serverWillStart ({ schema }) {
            typeAnnotationCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                max: Object.values(schema.getTypeMap()).filter(graphql__WEBPACK_IMPORTED_MODULE_2__.isCompositeType).length
            });
            fieldAnnotationCache = new lru_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
                max: Object.values(schema.getTypeMap()).filter(graphql__WEBPACK_IMPORTED_MODULE_2__.isObjectType).flatMap((t)=>Object.values(t.getFields())).length + Object.values(schema.getTypeMap()).filter(graphql__WEBPACK_IMPORTED_MODULE_2__.isInterfaceType).flatMap((t)=>Object.values(t.getFields())).length
            });
            return undefined;
        },
        async requestDidStart (requestContext) {
            function memoizedCacheAnnotationFromType(t) {
                const existing = typeAnnotationCache.get(t);
                if (existing) {
                    return existing;
                }
                const annotation = cacheAnnotationFromType(t);
                typeAnnotationCache.set(t, annotation);
                return annotation;
            }
            function memoizedCacheAnnotationFromField(field) {
                const existing = fieldAnnotationCache.get(field);
                if (existing) {
                    return existing;
                }
                const annotation = cacheAnnotationFromField(field);
                fieldAnnotationCache.set(field, annotation);
                return annotation;
            }
            const defaultMaxAge = options.defaultMaxAge ?? 0;
            const calculateHttpHeaders = options.calculateHttpHeaders ?? true;
            const { __testing__cacheHints } = options;
            return {
                async executionDidStart () {
                    if (isRestricted(requestContext.overallCachePolicy)) {
                        const fakeFieldPolicy = (0,_cachePolicy_js__WEBPACK_IMPORTED_MODULE_3__/* .newCachePolicy */ .b)();
                        return {
                            willResolveField ({ info }) {
                                info.cacheControl = {
                                    setCacheHint: (dynamicHint)=>{
                                        fakeFieldPolicy.replace(dynamicHint);
                                    },
                                    cacheHint: fakeFieldPolicy,
                                    cacheHintFromType: memoizedCacheAnnotationFromType
                                };
                            }
                        };
                    }
                    return {
                        willResolveField ({ info }) {
                            const fieldPolicy = (0,_cachePolicy_js__WEBPACK_IMPORTED_MODULE_3__/* .newCachePolicy */ .b)();
                            let inheritMaxAge = false;
                            const targetType = (0,graphql__WEBPACK_IMPORTED_MODULE_2__.getNamedType)(info.returnType);
                            if ((0,graphql__WEBPACK_IMPORTED_MODULE_2__.isCompositeType)(targetType)) {
                                const typeAnnotation = memoizedCacheAnnotationFromType(targetType);
                                fieldPolicy.replace(typeAnnotation);
                                inheritMaxAge = !!typeAnnotation.inheritMaxAge;
                            }
                            const fieldAnnotation = memoizedCacheAnnotationFromField(info.parentType.getFields()[info.fieldName]);
                            if (fieldAnnotation.inheritMaxAge && fieldPolicy.maxAge === undefined) {
                                inheritMaxAge = true;
                                if (fieldAnnotation.scope) {
                                    fieldPolicy.replace({
                                        scope: fieldAnnotation.scope
                                    });
                                }
                            } else {
                                fieldPolicy.replace(fieldAnnotation);
                            }
                            info.cacheControl = {
                                setCacheHint: (dynamicHint)=>{
                                    fieldPolicy.replace(dynamicHint);
                                },
                                cacheHint: fieldPolicy,
                                cacheHintFromType: memoizedCacheAnnotationFromType
                            };
                            return ()=>{
                                if (fieldPolicy.maxAge === undefined && ((0,graphql__WEBPACK_IMPORTED_MODULE_2__.isCompositeType)(targetType) && !inheritMaxAge || !info.path.prev)) {
                                    fieldPolicy.restrict({
                                        maxAge: defaultMaxAge
                                    });
                                }
                                if (__testing__cacheHints && isRestricted(fieldPolicy)) {
                                    const path = (0,graphql__WEBPACK_IMPORTED_MODULE_2__.responsePathAsArray)(info.path).join(".");
                                    if (__testing__cacheHints.has(path)) {
                                        throw Error("shouldn't happen: addHint should only be called once per path");
                                    }
                                    __testing__cacheHints.set(path, {
                                        maxAge: fieldPolicy.maxAge,
                                        scope: fieldPolicy.scope
                                    });
                                }
                                requestContext.overallCachePolicy.restrict(fieldPolicy);
                            };
                        }
                    };
                },
                async willSendResponse (requestContext) {
                    if (!calculateHttpHeaders) {
                        return;
                    }
                    const { response, overallCachePolicy } = requestContext;
                    const existingCacheControlHeader = parseExistingCacheControlHeader(response.http.headers.get("cache-control"));
                    if (existingCacheControlHeader.kind === "unparsable") {
                        return;
                    }
                    const cachePolicy = (0,_cachePolicy_js__WEBPACK_IMPORTED_MODULE_3__/* .newCachePolicy */ .b)();
                    cachePolicy.replace(overallCachePolicy);
                    if (existingCacheControlHeader.kind === "parsable-and-cacheable") {
                        cachePolicy.restrict(existingCacheControlHeader.hint);
                    }
                    const policyIfCacheable = cachePolicy.policyIfCacheable();
                    if (policyIfCacheable && existingCacheControlHeader.kind !== "uncacheable" && response.body.kind === "single" && !response.body.singleResult.errors) {
                        response.http.headers.set("cache-control", `max-age=${policyIfCacheable.maxAge}, ${policyIfCacheable.scope.toLowerCase()}`);
                    } else if (calculateHttpHeaders !== "if-cacheable") {
                        response.http.headers.set("cache-control", CACHE_CONTROL_HEADER_UNCACHEABLE);
                    }
                }
            };
        }
    });
}
const CACHE_CONTROL_HEADER_CACHEABLE_REGEXP = /^max-age=(\d+), (public|private)$/;
const CACHE_CONTROL_HEADER_UNCACHEABLE = "no-store";
function parseExistingCacheControlHeader(header) {
    if (!header) {
        return {
            kind: "no-header"
        };
    }
    if (header === CACHE_CONTROL_HEADER_UNCACHEABLE) {
        return {
            kind: "uncacheable"
        };
    }
    const match = CACHE_CONTROL_HEADER_CACHEABLE_REGEXP.exec(header);
    if (!match) {
        return {
            kind: "unparsable"
        };
    }
    return {
        kind: "parsable-and-cacheable",
        hint: {
            maxAge: +match[1],
            scope: match[2] === "public" ? "PUBLIC" : "PRIVATE"
        }
    };
}
function cacheAnnotationFromDirectives(directives) {
    if (!directives) return undefined;
    const cacheControlDirective = directives.find((directive)=>directive.name.value === "cacheControl");
    if (!cacheControlDirective) return undefined;
    if (!cacheControlDirective.arguments) return undefined;
    const maxAgeArgument = cacheControlDirective.arguments.find((argument)=>argument.name.value === "maxAge");
    const scopeArgument = cacheControlDirective.arguments.find((argument)=>argument.name.value === "scope");
    const inheritMaxAgeArgument = cacheControlDirective.arguments.find((argument)=>argument.name.value === "inheritMaxAge");
    const scopeString = scopeArgument?.value?.kind === "EnumValue" ? scopeArgument.value.value : undefined;
    const scope = scopeString === "PUBLIC" || scopeString === "PRIVATE" ? scopeString : undefined;
    if (inheritMaxAgeArgument?.value?.kind === "BooleanValue" && inheritMaxAgeArgument.value.value) {
        return {
            inheritMaxAge: true,
            scope
        };
    }
    return {
        maxAge: maxAgeArgument?.value?.kind === "IntValue" ? parseInt(maxAgeArgument.value.value) : undefined,
        scope
    };
}
function cacheAnnotationFromType(t) {
    if (t.astNode) {
        const hint = cacheAnnotationFromDirectives(t.astNode.directives);
        if (hint) {
            return hint;
        }
    }
    if (t.extensionASTNodes) {
        for (const node of t.extensionASTNodes){
            const hint = cacheAnnotationFromDirectives(node.directives);
            if (hint) {
                return hint;
            }
        }
    }
    return {};
}
function cacheAnnotationFromField(field) {
    if (field.astNode) {
        const hint = cacheAnnotationFromDirectives(field.astNode.directives);
        if (hint) {
            return hint;
        }
    }
    return {};
}
function isRestricted(hint) {
    return hint.maxAge !== undefined || hint.scope !== undefined;
} //# sourceMappingURL=index.js.map


/***/ })

};
;