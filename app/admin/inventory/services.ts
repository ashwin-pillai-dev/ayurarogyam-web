import { requestParams,Filter} from '@/utils/queryHelper/queryHelper.types'
import {get} from '@/utils/queryHelper/queryHelper'

interface PropType{
  query?:string
  page:string
  limit:string
}
export async function getInventory(props:PropType) {
  const search = props.query;
  const {page,limit} = props;
  const filter:Filter[]=[

  ];
  if(search){
    if(search.length > 0){
      filter.push( {field:'name',cond:'contains',value:search})
    }
  }



  const params:requestParams={
    page: typeof(page) === 'string'?Number(page):1,
    limit:typeof(limit) === 'string'?Number(limit):10,
    filters:filter,
    orderBy:'id,ASC',
    fullTextSearch:''
  }


    // const response = await get('/inventory',params)

    try{
    const response = await get('/inventory',params)

    console.log(response.ok);
    
    if (response.ok) { 
      console.log('before data');
      const res = await response.json();
      console.log('data');
      console.log(res);
      return res;
      
    } else {
      console.error('response not ok:', response.statusText);
      console.log(await response.json())
      
    }
  } catch (error) {
    console.error('in catch block');
    
    console.error('Error fetching admin data:', error);
  }


    //  try {
    //   // const response = await  fetch('http://localhost:3000/api/inventory');
    //   const response = await  fetch('http://localhost:3000/api/inventory?filter1=name||contains||test');
    //   console.log('response');
    //   console.log(response);
      
      

    //   if (response.ok) {        
    //     const data = await response.json();
    //     return data;
    //   } else {
    //     console.error('Error fetching admin data:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error fetching admin data:', error);
    // }

}

    // 
    

 

  