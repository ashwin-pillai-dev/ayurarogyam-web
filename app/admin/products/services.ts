import {get} from '@/utils/queryHelper/queryHelper'
export async function getProducts() {
    try {
      
      const response = await  fetch('http://localhost:3000/api/products');
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