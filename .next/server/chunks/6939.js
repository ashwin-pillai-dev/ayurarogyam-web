"use strict";
exports.id = 6939;
exports.ids = [6939];
exports.modules = {

/***/ 26939:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApolloServerPluginInlineTrace: () => (/* binding */ ApolloServerPluginInlineTrace)
/* harmony export */ });
/* harmony import */ var _apollo_usage_reporting_protobuf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46244);
/* harmony import */ var _traceTreeBuilder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32682);
/* harmony import */ var _internalPlugin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(43854);
/* harmony import */ var _schemaIsSubgraph_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7499);




function ApolloServerPluginInlineTrace(options = Object.create(null)) {
    let enabled = options.__onlyIfSchemaIsSubgraph ? null : true;
    return (0,_internalPlugin_js__WEBPACK_IMPORTED_MODULE_2__/* .internalPlugin */ .U)({
        __internal_plugin_id__: "InlineTrace",
        __is_disabled_plugin__: false,
        async serverWillStart ({ schema, logger }) {
            if (enabled === null) {
                enabled = (0,_schemaIsSubgraph_js__WEBPACK_IMPORTED_MODULE_3__/* .schemaIsSubgraph */ .X)(schema);
                if (enabled) {
                    logger.info("Enabling inline tracing for this subgraph. To disable, use " + "ApolloServerPluginInlineTraceDisabled.");
                }
            }
        },
        async requestDidStart ({ request: { http }, metrics }) {
            if (!enabled) {
                return;
            }
            const treeBuilder = new _traceTreeBuilder_js__WEBPACK_IMPORTED_MODULE_1__/* .TraceTreeBuilder */ .X({
                maskedBy: "ApolloServerPluginInlineTrace",
                sendErrors: options.includeErrors
            });
            if (http?.headers.get("apollo-federation-include-trace") !== "ftv1") {
                return;
            }
            if (metrics.captureTraces === false) {
                return;
            }
            metrics.captureTraces = true;
            treeBuilder.startTiming();
            return {
                async executionDidStart () {
                    return {
                        willResolveField ({ info }) {
                            return treeBuilder.willResolveField(info);
                        }
                    };
                },
                async didEncounterErrors ({ errors }) {
                    treeBuilder.didEncounterErrors(errors);
                },
                async willSendResponse ({ response }) {
                    treeBuilder.stopTiming();
                    if (response.body.kind === "incremental") {
                        return;
                    }
                    if (metrics.queryPlanTrace) {
                        treeBuilder.trace.queryPlan = metrics.queryPlanTrace;
                    }
                    const encodedUint8Array = _apollo_usage_reporting_protobuf__WEBPACK_IMPORTED_MODULE_0__/* .Trace */ .fM.encode(treeBuilder.trace).finish();
                    const encodedBuffer = Buffer.from(encodedUint8Array, encodedUint8Array.byteOffset, encodedUint8Array.byteLength);
                    const extensions = response.body.singleResult.extensions || (response.body.singleResult.extensions = Object.create(null));
                    if (typeof extensions.ftv1 !== "undefined") {
                        throw new Error("The `ftv1` extension was already present.");
                    }
                    extensions.ftv1 = encodedBuffer.toString("base64");
                }
            };
        }
    });
} //# sourceMappingURL=index.js.map


/***/ })

};
;