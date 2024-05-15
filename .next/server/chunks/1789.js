"use strict";
exports.id = 1789;
exports.ids = [1789];
exports.modules = {

/***/ 11789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ get)
/* harmony export */ });
const get = async (url, params)=>{
    try {
        let proccessedUrl = `${process.env.API_URL + url}?page=${params.page}&limit=${params.limit}&orderBy=${params.orderBy}`;
        // let proccessedUrl = `${'http://localhost:3000/api' + url}?page=${params.page}&limit=${params.limit}&orderBy=${params.orderBy}`
        if (params?.filters?.length > 0) {
            const filters = getStringFromFilters(params.filters);
            proccessedUrl = `${proccessedUrl}&${filters}`;
        }
        console.log("proccessedUrl");
        console.log(proccessedUrl);
        const res = await fetch(proccessedUrl, {
            cache: "no-cache"
        });
        console.log("response");
        console.log(res);
        return res;
    } catch (error) {
        console.log(error.message);
        throw new Error(error.message);
    }
};
const getStringFromFilters = (filters)=>{
    let filterString = "";
    filters.forEach((filter, index)=>{
        if (index != filters.length - 1) filterString += `filter${index + 1}=${filter.field}||${filter.cond}||${filter.value}&`;
        else filterString += `filter${index + 1}=${filter.field}||${filter.cond}||${filter.value} `;
    });
    return filterString;
};


/***/ })

};
;