'use server'
import prisma from'../../../lib/prisma'
import { redirect } from 'next/navigation';





export async function addClientType(input: FormData) {

    const { name } = Object.fromEntries(input)
    const data = {
        name: name.toString(),
    }
    console.log(data);
    let clientType ;
    
    try {

        clientType = await prisma.clientType.create({
            data

        });
        console.log('clientType');
        console.log(clientType);
        
       
        // redirect(`/admin/client-type/list`)
    redirect(`/admin/client-type/list`)


    } catch (error) {
        console.error('Error adding client type:', error);
        throw error;
    }

    console.log('executing revaliate');

    // revalidatePath(`/admin/client-type/list`);
    // redirect(`/admin/client-type/list`)
    


}