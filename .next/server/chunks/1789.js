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
        console.log(`env api url: ${process.env.API_URL}`);
        console.log(`processed URL: ${proccessedUrl}`);
        if (params?.filters?.length > 0) {
            const filters = getStringFromFilters(params.filters);
            proccessedUrl = `${proccessedUrl}&${filters}`;
        }
        console.log("processed url : ");
        console.log(proccessedUrl);
        const res = await fetch(proccessedUrl);
        console.log("response");
        console.log(res);
        return res;
    } catch (error) {
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