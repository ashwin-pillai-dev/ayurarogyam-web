"use strict";
(() => {
var exports = {};
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 53524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 58949:
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

// NAMESPACE OBJECT: ./app/api/filteredPrices/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/prisma.ts
var prisma = __webpack_require__(94734);
;// CONCATENATED MODULE: ./app/api/filteredPrices/route.ts

// export const dynamic = 'force-dynamic'
async function GET(request) {
    console.log("in filter prices");
    console.log(request);
    const { searchParams } = new URL(request.url);
    const productId = searchParams.get("productId");
    const clientTypeId = searchParams.get("clientTypeId");
    const qty = searchParams.get("qty");
    try {
        const records = await prisma/* default */.Z.prices.findFirst({
            where: {
                productId: productId,
                clientTypeId: clientTypeId,
                startingQtyLimit: {
                    lte: Number(qty)
                },
                endingQtyLimit: {
                    gte: Number(qty)
                }
            }
        });
        console.log(`records:`);
        console.log(records);
        return Response.json(records);
    } catch (error) {
        return Response.error();
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2FfilteredPrices%2Froute&name=app%2Fapi%2FfilteredPrices%2Froute&pagePath=private-next-app-dir%2Fapi%2FfilteredPrices%2Froute.ts&appDir=D%3A%5Cprojects%5Cayurarogyam-web%5Capp&appPaths=%2Fapi%2FfilteredPrices%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/filteredPrices/route","pathname":"/api/filteredPrices","filename":"route","bundlePath":"app/api/filteredPrices/route"},"resolvedPagePath":"D:\\projects\\ayurarogyam-web\\app\\api\\filteredPrices\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/filteredPrices/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [3763,3851,6133,188,5981], () => (__webpack_exec__(58949)));
module.exports = __webpack_exports__;

})();