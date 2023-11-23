
export async function getCommissions(partnerId:string) {
    try {
      
      const response = await  fetch(`http://localhost:3000/api/commissions?partnerId=${partnerId}`,{cache:'no-store'});
      if (response.ok) {        
        const data = await response.json();
        console.log(`commsision data:`);
        console.log(data);
        
        return data;
      } else {
        console.error('Error fetching commssions:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching commssions:', error);
    }
  }