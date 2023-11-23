import { requestParams, Filter } from "./queryHelper.types";


export const get = async (url: string, params: requestParams) => {
 try {
       let proccessedUrl = `${process.env.API_URL + url}?page=${params.page}&limit=${params.limit}&orderBy=${params.orderBy}`
       console.log(`env api url: ${process.env.API_URL}`);
       console.log(`URL: ${url}`);
       console.log(`processed URL: ${proccessedUrl}`);
       
       if (params?.filters?.length > 0) {
           const filters: string = getStringFromFilters(params.filters);
           proccessedUrl = `${proccessedUrl}&${filters}`
       }
       console.log('processed url : ');
       console.log(proccessedUrl);
       const res = await fetch(proccessedUrl);
       console.log('response');
       console.log(res);
       
       
       return res;
 } catch (error:any) {
    throw new Error(error.message)
    
 }
}

const getStringFromFilters = (filters: Filter[]): string => {
    let filterString = '';
    filters.forEach((filter: Filter, index) => {
        if (index != filters.length - 1 )
            filterString += `filter${index + 1}=${filter.field}||${filter.cond}||${filter.value}&`
        else
            filterString += `filter${index + 1}=${filter.field}||${filter.cond}||${filter.value} `

    })
    return filterString

}



