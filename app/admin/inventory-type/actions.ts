'use server'
import prisma from'../../../lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';





export async function addClientType(input: FormData) {

    const { name,desc } = Object.fromEntries(input)
    const data = {
        name: name.toString(),
        desc:desc.toString()
    }
    console.log(data);
    
    try {

        const category = await prisma.inventoryType.create({
            data

        });


    } catch (error) {
        console.error('Error adding inventory type:', error);
        throw error;
    }

    revalidatePath(`/admin/inventory-type/list`);
    redirect(`/admin/inventory-type/list`)

}