import prisma from '../../../lib/prisma';


export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const invoiceId:any = searchParams.get('invoiceId')


    try {
        const res = await prisma.invoice.findFirst({
            // include: {
            //     sales:{
            //         include:{
            //             invoice:true
            //         }
            //     }
            // },

            where: {
                id: invoiceId, 
            },
        });

        const invoiceItems = await prisma.invoiceItem.findMany({
            where:{
                invoiceId:{
                    equals:invoiceId
                },
            },
            include:{
                product:true
            }
        })
        return Response.json({...res,invoiceItems})
    } catch (error) {
        return Response.error()
    }
}
