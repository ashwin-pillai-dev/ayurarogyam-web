
export async function getClientTypes() {
    try {
      
      const response = await  fetch(`${process.env.API_URL}/client-types`,{next:{tags:['client-types']}});
      
      

      if (response.ok) {        
        const data = await response.json();
        console.log('data');
        console.log(data);
        
        return data;
      } else {
        console.error('Error fetching admin data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  }