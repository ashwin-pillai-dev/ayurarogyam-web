import prisma from '../../../lib/prisma';


export async function GET(request: Request) {

    try {
        const res = await prisma.client.findMany({
            include:{
                clientType:true
            }
        });
        return Response.json(res)
    } catch (error) {
        return Response.error()


    }
}

