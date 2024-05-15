"use strict";
exports.id = 6457;
exports.ids = [6457];
exports.modules = {

/***/ 16457:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ getClientTypes)
/* harmony export */ });
/* harmony import */ var _utils_queryHelper_queryHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11789);

async function getClientTypes(props) {
    try {
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
        // const response = await  fetch(`${process.env.API_URL}/client-types`,{next:{tags:['client-types']}});
        const params = {
            page: typeof page === "string" ? Number(page) : 1,
            limit: typeof limit === "string" ? Number(limit) : 10,
            filters: filter,
            orderBy: "id,ASC",
            fullTextSearch: ""
        };
        const response = await (0,_utils_queryHelper_queryHelper__WEBPACK_IMPORTED_MODULE_0__/* .get */ .U)("/client-types", params);
        if (response.ok) {
            const data = await response.json();
            console.log("data");
            console.log(data);
            return data;
        } else {
            console.error("Error fetching admin data:", response.statusText);
        }
    } catch (error) {
        console.error("Error fetching admin data:", error);
    }
}


/***/ })

};
;