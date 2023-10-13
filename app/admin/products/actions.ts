'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '../../../lib/prisma';
import { FileUpload } from '../common/services';





export async function addProduct(input: FormData) {
    const { name, file, desc, mrp, category } = Object.fromEntries(input)
    let fileObj: any = file;
    const uploadResponse = await FileUpload(fileObj)

    const data = {
        name: name.toString(),
        image: uploadResponse,
        desc:desc.toString(),
        mrp: parseFloat(mrp.toString()),
        categoryId: category.toString()

    }
    try {

            const product = await prisma.product.create({
                data

            });
            revalidatePath(`/admin/products/list`);
            redirect(`/admin/products/list`)

    } catch (error) {
        console.error('Error adding Product:', error);
        throw error;
    }

}