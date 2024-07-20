'use server'
import prisma from '../../../lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { FileUpload } from '../common/services';






export async function addInventory(input: FormData) {

    const { name, qty, inventoryTypeId, productId, image } = Object.fromEntries(input)
    let fileObj: any = image;
    let uploadResponse='';
    // if (fileObj) {
    //     uploadResponse = await FileUpload(fileObj)


    // }
    const data = {
        name: name.toString(),
        inventoryTypeId: inventoryTypeId.toString(),
        productId: productId.toString(),
        qty: parseFloat(qty.toString()),
        image:uploadResponse != undefined ? uploadResponse : null
    }
    console.log(data);

    try {

        const inventory = await prisma.inventory.create({
            data

        });


    } catch (error) {
        console.error('Error adding inventory:', error);
        throw error;
    }
    revalidatePath(`/admin/inventory/list`);
    redirect(`/admin/inventory/list`)

}