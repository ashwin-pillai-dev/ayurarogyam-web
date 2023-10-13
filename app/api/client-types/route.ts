import prisma from '../../../lib/prisma';


export async function GET(request: Request) {

    try {
        const res = await prisma.clientType.findMany();
        return Response.json(res)
    } catch (error) {
        return Response.error()


    }
}

