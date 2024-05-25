import { get } from '@/utils/queryHelper/queryHelper'
export async function getProducts() {
  try {

    const response = await get(`/products`,{limit:1000,page:1,filters:[],fullTextSearch:'',orderBy:'createdAt,DESC'});
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error fetching  products:', response.statusText);
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}