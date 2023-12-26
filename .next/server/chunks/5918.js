exports.id = 5918;
exports.ids = [5918];
exports.modules = {

/***/ 79514:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21146));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 76010))

/***/ }),

/***/ 46004:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21146))

/***/ }),

/***/ 76010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NavSideWrapper)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/flowbite-react/lib/cjs/index.js
var cjs = __webpack_require__(99920);
// EXTERNAL MODULE: ./node_modules/react-icons/bi/index.esm.js
var index_esm = __webpack_require__(85228);
// EXTERNAL MODULE: ./node_modules/react-icons/bs/index.esm.js
var bs_index_esm = __webpack_require__(75484);
// EXTERNAL MODULE: ./node_modules/react-icons/hi/index.esm.js
var hi_index_esm = __webpack_require__(75655);
// EXTERNAL MODULE: ./node_modules/react-icons/tb/index.esm.js
var tb_index_esm = __webpack_require__(79130);
// EXTERNAL MODULE: ./node_modules/react-icons/md/index.esm.js
var md_index_esm = __webpack_require__(64348);
;// CONCATENATED MODULE: ./app/admin/components/sidebar/sideBar.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 







const DefaultSidebar = ({ sidebarVisible })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("aside", {
        className: `fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform ${!sidebarVisible ? "-translate-x-full" : "translate-x-0"} bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700`,
        "aria-label": "Sidenav",
        id: "drawer-navigation",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800",
            children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar, {
                "aria-label": "Default sidebar example",
                children: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Items, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Sidebar.ItemGroup, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "#",
                                icon: hi_index_esm.HiChartPie,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Dashboard"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Sidebar.Collapse, {
                                icon: tb_index_esm/* TbTableShare */.v2q,
                                label: "Masters",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                        href: "/admin/client-type/list",
                                        children: "Client type"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                        href: "/admin/partner-roles/list",
                                        children: "Partner Roles"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                        href: "/admin/inventory-type/list",
                                        children: "Inventory type"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/categories/list",
                                icon: index_esm/* BiCategoryAlt */.vfw,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Categories"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/products/list",
                                icon: hi_index_esm.HiShoppingBag,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Products"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/inventory/list",
                                icon: md_index_esm/* MdOutlineInventory2 */.x7P,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Inventory"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/partners/list",
                                icon: hi_index_esm.HiUser,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Partners"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/clients/list",
                                icon: bs_index_esm/* BsFillPersonLinesFill */.z8x,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Clients"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Sidebar.Item, {
                                href: "/admin/sales/list",
                                icon: tb_index_esm/* TbBusinessplan */.FuW,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Sales"
                                })
                            })
                        ]
                    })
                })
            })
        })
    });
};
/* harmony default export */ const sideBar = (DefaultSidebar);

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
;// CONCATENATED MODULE: ./app/admin/components/NavSideWrapper/navbar/NavBarNew.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function NavbarWithDropdown({ onDrawerClick, user }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Navbar, {
        className: "bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50",
        fluid: true,
        rounded: true,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: ()=>onDrawerClick(),
                "data-drawer-target": "drawer-navigation",
                "data-drawer-toggle": "drawer-navigation",
                "aria-controls": "drawer-navigation",
                className: "p-2 mr-2 text-gray-600 rounded-lg cursor-pointer md:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        "aria-hidden": "true",
                        className: "w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                        "aria-hidden": "true",
                        className: "hidden w-6 h-6",
                        fill: "currentColor",
                        viewBox: "0 0 20 20",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                            fillRule: "evenodd",
                            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
                            clipRule: "evenodd"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "sr-only",
                        children: "Toggle sidebar"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(cjs.Navbar.Brand, {
                href: "#/admin/dashboard",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-start items-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        height: 60,
                        width: 60,
                        src: "/ayur-arogyam-logo.png",
                        alt: "image description"
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex md:order-2",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Dropdown, {
                    arrowIcon: false,
                    inline: true,
                    label: /*#__PURE__*/ jsx_runtime_.jsx(cjs.Avatar, {
                        alt: "User settings",
                        img: "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
                        rounded: true
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(cjs.Dropdown.Header, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block text-sm",
                                    children: user.user.name
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "block truncate text-sm font-medium",
                                    children: user.user.email
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Dropdown.Item, {
                            children: "Dashboard"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Dropdown.Item, {
                            children: "Settings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Dropdown.Item, {
                            children: "Earnings"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Dropdown.Divider, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(cjs.Dropdown.Item, {
                            onClick: ()=>(0,react.signOut)({
                                    callbackUrl: "http://localhost:3000/admin"
                                }),
                            children: "Sign out"
                        })
                    ]
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./app/admin/components/NavSideWrapper/navSideWrapper.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



function NavSideWrapper(user) {
    const [drawerVisible, setDrawerVisible] = (0,react_experimental_.useState)(false);
    const drawerClicked = ()=>{
        setDrawerVisible(!drawerVisible);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(NavbarWithDropdown, {
                onDrawerClick: drawerClicked,
                user: user
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(sideBar, {
                sidebarVisible: drawerVisible
            })
        ]
    });
}


/***/ }),

/***/ 21146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99920);
/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flowbite_react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-center w-full h-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Spinner, {
            size: "xl"
        })
    });
}


/***/ }),

/***/ 3189:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\admin\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_admin_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(43945);
var target_path_app_admin_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_admin_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(17967);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./app/admin/components/NavSideWrapper/navSideWrapper.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\projects\ayurarogyam-web\app\admin\components\NavSideWrapper\navSideWrapper.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const navSideWrapper = (__default__);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react-experimental/react.shared-subset.js
var react_shared_subset = __webpack_require__(35465);
// EXTERNAL MODULE: ./app/admin/loading.js
var loading = __webpack_require__(63229);
// EXTERNAL MODULE: ./node_modules/next-auth/next/index.js
var next = __webpack_require__(48388);
// EXTERNAL MODULE: ./app/api/auth/[...nextauth]/options.ts
var options = __webpack_require__(89733);
;// CONCATENATED MODULE: ./app/admin/layout.tsx
// referrd and followed https://github.com/apollographql/apollo-client-nextjs for apollo provider for makig graphql queries and mutations
// import '../global.css'








const metadata = {
    title: "Ayur-Arogyam",
    description: "Elvate health with Ayurveda"
};
async function RootLayout({ children }) {
    const session = await (0,next.getServerSession)(options/* authOptions */.L);
    let user;
    if (session?.user) {
        user = session.user;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: (target_path_app_admin_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(navSideWrapper, {
                    user: session?.user
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "md:ml-64 h-auto pt-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_shared_subset.Suspense, {
                        fallback: /*#__PURE__*/ jsx_runtime_.jsx(loading["default"], {}),
                        children: children
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 63229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21313);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\projects\ayurarogyam-web\app\admin\loading.js`)

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