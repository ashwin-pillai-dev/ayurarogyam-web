import { get } from '@/utils/queryHelper/queryHelper'
export async function getProducts() {
  try {

    const response = await fetch(`${process.env.API_URL}/products`);
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