'use server'
import prisma from '../../../lib/prisma'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';





export async function addPrices(input: FormData) {

    const { startingQtyLimit, endingQtyLimit, amount, productId, clientType } = Object.fromEntries(input)
    const data = {
        startingQtyLimit: parseInt(startingQtyLimit.toString()),
        endingQtyLimit: parseInt(endingQtyLimit.toString()),
        amount: parseFloat(amount.toString()),
        clientTypeId: clientType.toString(),
        productId: productId.toString()
    }

console.log(data);

try {

    const res = await prisma.prices.create({
        data

    });
    // revalidatePath(`/admin/prices/list/${data.productId}`);
    // revalidatePath('admin/prices/list','page')
   

} catch (error) {
    console.error('Error adding client type:', error);
    throw error;
}

redirect(`/admin/prices/list/${data.productId}`)

}