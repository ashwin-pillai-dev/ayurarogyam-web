
export async function getCategories() {
    try {
      
      const response = await  fetch('http://localhost:3000/api/categories');
      

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