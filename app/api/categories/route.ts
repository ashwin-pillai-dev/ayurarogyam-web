import prisma from '../../../lib/prisma';

export const dynamic = 'force-dynamic'
export const revalidate = 0

export async function GET(request: Request) {
    try {
        console.log('in prices route');

        const { searchParams } = new URL(request.url)  ;    
        const pageParam =  searchParams.get('page');
        const limitParam =  searchParams.get('limit');
        console.log(`page${pageParam} limit ${limitParam}`);

        const page = pageParam != null ?Number(pageParam) : 1;
        const limit = limitParam != null ?Number(limitParam) : 10;
        
        const skip =  Number(page) ==1?0:Number(page-1) * Number (limit)
        let filters:any = {}
        searchParams.forEach((value, key) => {
            if(key.startsWith('filter')){
                const parts = value.split('||');                
                if (parts.length === 3) {
                    const [field, cond, value] = parts;
                    if(cond == 'contains'){
                        filters[field] ={
                            [cond]:value,
                            mode: 'insensitive'
                        }
                    }
                    else{
                        filters[field] ={
                            [cond]:value,
                        }
                    }
                  }
            }
        })
        const res = await prisma.category.findMany(
            {
            skip: skip,
            take: Number(limit),
            where: {...filters},
            orderBy:{
                createdAt:'desc',
            }
        }
        );

        const total =  await prisma.category.count()

        const responseData = {data:res,limit:Number(limit),page:Number(pageParam),total:total}
        console.log('responseData');
        console.log(responseData);
        

        const response = Response.json(responseData);
        console.log('response');
        console.log(response.json);
        
        return response
    } catch (error) {
        console.log('error log server');
        
        console.error(error);
        
        return Response.error()


    }
}

// export async function GET(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     console.log('hello');
//     const admins = [{ name: 'anil' }];
//     res.status(200).json(admins);
//   } catch (error) {
//     console.error('Error fetching admin data:', error);
//     res.status(500).json({ error: 'Error fetching admin data: ' + error });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
