'use server'
import bcrypt from 'bcryptjs';
import prisma from '../../../lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import { FileUpload } from '../common/services';





export async function addCategory(input: FormData) {

    const { name, file } = Object.fromEntries(input)
    let fileObj: any = file;
    let uploadResponse = '';



    // if (file) {
    //     uploadResponse = await FileUpload(fileObj)
    // }

    // console.log(uploadResponse);


    const data = {
        name: name.toString(),
        image: '',

    }
    let category;
    try {

        category = await prisma.category.create({
            data

        });

        console.log('category created: ', category);
        




    } catch (error) {
        console.error('Error adding category:', error);
        throw error;
    }

    // revalidatePath(`/admin/categories/list`);
    // return category;

    redirect(`/admin/categories/list`)

}