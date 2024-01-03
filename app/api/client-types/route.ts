import prisma from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';


export async function GET(request: Request) {
    let res;
    try {
        res = await prisma.clientType.findMany();

    } catch (error) {
        return Response.error()


    }

    revalidatePath('/api/client-types')
    return Response.json(res);
}

