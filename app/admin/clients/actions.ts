'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '../../../lib/prisma';
import {Prisma , Client} from '@prisma/client'
import { clientForm } from './add/clientsSchema';




export async function addClient(input: clientForm) {
    const { name, email,contactNumber,address,clientType} = input
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

export async function updateClient(input: clientForm,id:string):Promise<Client> {

    const { name, 
        address,
        email,
        contactNumber,
        clientType  } = input


    const data = {
        name: name.toString(),
        email: email.toString().length > 0?email.toString():null,
        contactNumber:contactNumber.toString(),
        address: address.toString(),
        clientTypeId:clientType.toString()

    }
    let client:Client;
    try {

        client = await prisma.client.update({
            data,
            where:{id:id}

        });

    return client;        




    } catch (error) {
        console.error('Error adding client:', error);
        throw error;
    }
}