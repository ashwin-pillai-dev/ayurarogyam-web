
export async function getPrices(productId:string) {
    try {
      
      const response = await  fetch(`http://localhost:3000/api/prices?productId=${productId}`,{cache:'no-store'});
      if (response.ok) {        
        const data = await response.json();
        return data;
      } else {
        console.error('Error fetching prices:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching prices:', error);
    }
  }