"use strict";
exports.id = 3188;
exports.ids = [3188];
exports.modules = {

/***/ 23188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ getPartnerRoles)
/* harmony export */ });
/* harmony import */ var _utils_queryHelper_queryHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11789);

async function getPartnerRoles(props) {
    const search = props.query;
    const { page, limit } = props;
    const filter = [];
    if (search) {
        if (search.length > 0) {
            filter.push({
                field: "name",
                cond: "contains",
                value: search
            });
        }
    }
    const params = {
        page: typeof page === "string" ? Number(page) : 1,
        limit: typeof limit === "string" ? Number(limit) : 10,
        filters: filter,
        orderBy: "id,ASC",
        fullTextSearch: ""
    };
    try {
        const response = await (0,_utils_queryHelper_queryHelper__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)("/partner-roles", params);
        console.log(response.ok);
        if (response.ok) {
            console.log("before data");
            const res = await response.json();
            console.log("data");
            console.log(res);
            return res;
        } else {
            console.error("response not ok:", response.statusText);
            console.log(await response.json());
        }
    } catch (error) {
        console.error("in catch block");
        console.error("Error fetching admin data:", error);
    }
}


/***/ })

};
;