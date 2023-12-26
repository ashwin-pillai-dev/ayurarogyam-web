"use strict";
(() => {
var exports = {};
exports.id = 7139;
exports.ids = [7139];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 27349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/sales/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic),
  revalidate: () => (revalidate)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__(94734);
;// CONCATENATED MODULE: ./app/api/sales/route.ts

const dynamic = "force-dynamic";
const revalidate = 0;
async function GET(request) {
    try {
        console.log("in route sales");
        const { searchParams } = new URL(request.url);
        const pageParam = searchParams.get("page");
        const limitParam = searchParams.get("limit");
        console.log(`page${pageParam} limit ${limitParam}`);
        const page = pageParam != null ? Number(pageParam) : 1;
        const limit = limitParam != null ? Number(limitParam) : 10;
        const skip = Number(page) === 1 ? 0 : (Number(page) - 1) * Number(limit);
        let filters = {};
        searchParams.forEach((value, key)=>{
            if (key.startsWith("filter")) {
                const parts = value.split("||");
                if (parts.length === 3) {
                    const [field, cond, filterValue] = parts;
                    const [parentField, childField] = field.split("."); // Split into parent and child fields
                    if (parentField && childField) {
                        if (cond === "contains") {
                            // Create a nested where clause with 'mode: insensitive' for 'contains'
                            filters[parentField] = {
                                [childField]: {
                                    contains: filterValue,
                                    mode: "insensitive"
                                }
                            };
                        } else {
                            // Create a nested where clause without 'mode: insensitive'
                            filters[parentField] = {
                                [childField]: filterValue
                            };
                        }
                    } else {
                        if (cond === "contains") {
                            // Create a where clause with 'mode: insensitive' for 'contains'
                            filters[field] = {
                                contains: filterValue,
                                mode: "insensitive"
                            };
                        } else {
                            // Create a where clause without 'mode: insensitive'
                            filters[field] = {
                                [cond]: filterValue
                            };
                        }
                    }
                }
            }
        });
        const res = await prisma/* default */.Z.sale.findMany({
            skip: skip,
            take: Number(limit),
            where: {
                ...filters
            },
            include: {
                invoice: {
                    include: {
                        client: true
                    }
                },
                partner: true
            },
            orderBy: {
                createdAt: "desc"
            }
        });
        const total = await prisma/* default */.Z.sale.count();
        const responseData = {
            data: res,
            limit: Number(limit),
            page: Number(pageParam),
            total: total
        };
        const response = Response.json(responseData);
        return response;
    } catch (error) {
        console.log("error log server");
        console.error(error);
        return Response.error();
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsales%2Froute&name=app%2Fapi%2Fsales%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsales%2Froute.ts&appDir=D%3A%5Cprojects%5Cayurarogyam-web%5Capp&appPaths=%2Fapi%2Fsales%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/sales/route","pathname":"/api/sales","filename":"route","bundlePath":"app/api/sales/route"},"resolvedPagePath":"D:\\projects\\ayurarogyam-web\\app\\api\\sales\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/sales/route"

    

/***/ }),

/***/ 94734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

let prisma;
if (true) {
    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
} else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3763,3851,6133,188,5981], () => (__webpack_exec__(27349)));
module.exports = __webpack_exports__;

})();