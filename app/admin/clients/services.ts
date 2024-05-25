import { get } from "@/utils/queryHelper/queryHelper";

export async function getClients() {
    try {
      
      const response = await get(`/clients`,{limit:1000,page:1,filters:[],fullTextSearch:'',orderBy:'createdAt,DESC'});
      

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