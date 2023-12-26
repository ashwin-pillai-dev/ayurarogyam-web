import { get } from "@/utils/queryHelper/queryHelper";
import { Filter, requestParams } from "@/utils/queryHelper/queryHelper.types";

interface PropType {
  filter: Filter[],
  page: string
  limit: string
}
export async function getSales(props: PropType) {
  // const search = props.query;
  const { page, limit } = props;
  const filters: Filter[] = props.filter;
  if (filters) {
    if (filters.length > 0) {
      filters.forEach((filter) => {
        filters.push({ field: filter.field, cond: filter.cond, value: filter.value })
      })
    }
  }

  const params: requestParams = {
    page: typeof (page) === 'string' ? Number(page) : 1,
    limit: typeof (limit) === 'string' ? Number(limit) : 10,
    filters: filters,
    orderBy: 'id,ASC',
    fullTextSearch: ''
  }

  try {
    const response = await get('/sales', params)
    // const response = await fetch('http://13.201.127.24:3000/api/inventory?page=1&limit=10&orderBy=id,ASC')
    http://13.201.127.24:3000/api/inventory?page=1&limit=10&orderBy=id,ASC

    console.log(response.ok);

    if (response.ok) {
      console.log('before data');
      console.log(response);
      
      const res = await response.json();
      console.log('data');
      console.log(res.data);
      return res;

    } else {
      console.error('response not ok:', response.statusText);
      console.log(await response.json())

    }
  } catch (error) {
    console.error('in catch block');

    console.error('Error fetching admin data:', error);
  }

}

export async function fetchFilteredPrice(productId: string, clientTypeId: string, qty: number) {
  try {
    const response = await fetch(`${process.env.API_URL}/filteredPrices?productId=${productId}&clientTypeId=${clientTypeId}&qty=${qty}`);
    if (response.ok) {
      const result = await response.json();
      return result;
    } else {
      console.error('Error fetching data');
      throw new Error('Problem in fetching filtered priced')
    }
  } catch (error) {
    console.error('Error fetching data');
    throw new Error('Problem in fetching filtered priced')
  }
}