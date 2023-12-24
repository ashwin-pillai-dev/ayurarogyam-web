
export async function getClients() {
    try {
      
      const response = await  fetch(`${process.env.API_URL}/clients`);
      

      if (response.ok) {        
        const data = await response.json();
        console.log(data);
        
        return data;
      } else {
        console.error('Error fetching  cients:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching cients:', error);
    }
  }