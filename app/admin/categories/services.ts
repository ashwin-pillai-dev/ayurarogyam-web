import { get } from "@/utils/queryHelper/queryHelper";
import { requestParams } from "@/utils/queryHelper/queryHelper.types";

export async function getCategories() {
  try {

    const params: requestParams = {
      page:1,
      limit: 100,
      filters: [],
      orderBy: 'id,ASC',
      fullTextSearch: ''
    }
    const response = await get('/categories', params)


    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching admin data:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching admin data:', error);
  }
}