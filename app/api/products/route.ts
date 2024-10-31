// pages/api/agents.js
import prisma from '../../../lib/prisma';

export const dynamic = 'force-dynamic'
export const revalidate = 0


export async function GET(request: Request) {

    try {
        const res = await prisma.product.findMany({
            include:{
                category:true
            }
        });
        console.log(res);

        return Response.json(res)
    } catch (error) {
        return Response.error()


    }
}

