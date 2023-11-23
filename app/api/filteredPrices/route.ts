import prisma from '../../../lib/prisma';


export async function GET(request: Request) {
    console.log(request);
    const { searchParams } = new URL(request.url)
    const productId:any = searchParams.get('productId')
    const clientTypeId:any = searchParams.get('clientTypeId')
    const qty:any = searchParams.get('qty')


    try {
        const records = await prisma.prices.findFirst({
            where: {
              productId: productId,
              clientTypeId:clientTypeId,
              startingQtyLimit: {
                lte:Number(qty) 
              },
              endingQtyLimit: {
                gte: Number(qty)
              }
            }
          });
          console.log(`records:`);
          console.log(records);
          
        return Response.json(records)
    } catch (error) {
        return Response.error()


    }
}

