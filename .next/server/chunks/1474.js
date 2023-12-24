"use strict";
exports.id = 1474;
exports.ids = [1474];
exports.modules = {

/***/ 62157:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DefaultNavbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99920);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function DefaultNavbar() {
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();
    console.log(pathname);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container mx-auto my-0",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar, {
            fluid: true,
            rounded: true,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Brand, {
                    href: "/",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        height: 500,
                        width: 130,
                        className: "h-32 max-w-full rounded-lg",
                        src: "/ayur-arogyam-logo.png",
                        alt: "image description"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Toggle, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Collapse, {
                    className: "text-base",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {
                            active: pathname == "",
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-primary-700 hover:text-primary-500 text-base ${pathname == "/" ? " font-bold" : ""}`,
                                children: "Home"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {
                            href: "/About",
                            active: pathname == "/About",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-primary-700 hover:text-primary-500 text-base ${pathname == "/About" ? " font-bold" : ""}`,
                                children: "About us"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {
                            href: "/Categories",
                            active: pathname == "/Categories",
                            className: "text-primary-700 hover:text-primary-400",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-primary-700 hover:text-primary-500 text-base ${pathname == "/Categories" ? " font-bold" : ""}`,
                                children: "Products"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {
                            active: pathname == "/Blog",
                            href: "/Blog",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `text-primary-700 hover:text-primary-500 text-base ${pathname == "/Blog" ? " font-bold" : ""}`,
                                children: "Blogs"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {
                            href: "/Contact",
                            active: pathname == "/Contact",
                            className: `text-primary-700 hover:text-primary-500 text-base ${pathname == "/Contact" ? " font-bold" : ""}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-primary-700 hover:text-primary-500 text-base",
                                children: "Contact"
                            })
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 26547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\projects\ayurarogyam-web\app\components\DefaultNavbar.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;