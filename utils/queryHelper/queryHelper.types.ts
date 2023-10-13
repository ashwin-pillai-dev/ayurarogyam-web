export interface requestParams {
    filters:Filter[];
    fullTextSearch:string;
    orderBy:string;
    page:number,
    limit:number
}

export interface Filter{
    field:string,
    cond:string,
    value:string
}

