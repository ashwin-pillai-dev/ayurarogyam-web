'use server'
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import prisma from '../../../lib/prisma';
import { FileUpload } from '../common/services';





export async function addProduct(input: FormData) {
    const { name, file, desc, mrp, category } = Object.fromEntries(input)
    console.log('category');
    console.log(category);
    
    let fileObj: any = file;
    const uploadResponse = ''
    // const uploadResponse = await FileUpload(fileObj)

    const data = {
        name: name.toString(),
        image: uploadResponse,
        desc:desc.toString(),
        mrp: parseFloat(mrp.toString()),
        categoryId: category.toString()

    }
    console.log("product data");
    console.log(data);
    
    try {

            const product = await prisma.product.create({
                data

            });


    } catch (error) {
        console.error('Error adding Product:', error);
        throw error;
    }

    revalidatePath(`/admin/products/list`);
    redirect(`/admin/products/list`)

}