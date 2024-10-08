'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '../../../lib/prisma';
import {Prisma} from '@prisma/client'




export async function addClient(input: FormData) {
    const { name, email, password,contactNumber,address,clientType} = Object.fromEntries(input)
    console.log(email.toString());
    
    const data = {
        name: name.toString(),
        email: email.toString().length > 0?email.toString():null,
        contactNumber:contactNumber.toString(),
        address: address.toString(),
        clientTypeId:clientType.toString()
    }
    try {

            const product = await prisma.client.create({
                data

            });


    } catch (error) {
        console.error('Error adding Product:', error);
        throw error;
    }

    revalidatePath(`/admin/clients/list`);
    redirect(`/admin/clients/list`)

}