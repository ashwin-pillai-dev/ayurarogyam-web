import prisma from '../../../lib/prisma';


export async function GET(request: Request) {
    console.log(request);
    const { searchParams } = new URL(request.url)
    const productId:any = searchParams.get('productId')


    try {
        const res = await prisma.prices.findMany({
            include: {
                clientType: true
            },

            where: {
                productId: productId, 
            },
        });
        return Response.json(res)
    } catch (error) {
        return Response.error()


    }
}

