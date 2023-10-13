'use server'
import prisma from'../../../lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';





export async function addClientType(input: FormData) {

    const { name } = Object.fromEntries(input)
    const data = {
        name: name.toString(),
    }
    console.log(data);
    
    try {

        const category = await prisma.clientType.create({
            data

        });
        revalidatePath(`/admin/client-type/list`);
        redirect(`/admin/client-type/list`)

    } catch (error) {
        console.error('Error adding client type:', error);
        throw error;
    }

}