'use server'
import bcrypt from 'bcryptjs';
import prisma from '../../../lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { FileUpload } from '../common/services';





export async function addCategory(input: FormData) {

    const { name, file } = Object.fromEntries(input)
    console.log('Type of file');
    console.log(typeof (file));
    let fileObj: any = file;
    console.log(fileObj.type);





    const uploadResponse = await FileUpload(fileObj)

    const data = {
        name: name.toString(),
        image: uploadResponse,

    }
    let category;
    try {

        category = await prisma.category.create({
            data

        });




    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }

    revalidatePath(`/admin/categories/list`);
    return category;

    // redirect(`/admin/categories/list`)

}