'use server'
import bcrypt from 'bcryptjs';
import prisma from'../../../lib/prisma'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

type addPartnerInputType = {
    name: string;
    roleId: string;
    email: string;
    contactNumber: string;
    password: string;
};


export async function addAgent(input: addPartnerInputType) {

    const agentData = {
        name: input.name,
        email: input.email,
        contactNumber:input.contactNumber,
        password: await bcrypt.hash(input.password, 10),
        partnerRoleId:input.roleId
        
    }

    try {

        const admin = await prisma.partner.create({
            data: agentData,

        });
        revalidatePath(`/admin/partners/list`);
        return admin;
        // redirect(`/admin/partners/list`)

    } catch (error) {
        console.error('Error in adding agent:', error);
        throw error;
    }

}