// actions.ts
'use server';
import prisma from '../../../../../lib/prisma';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import {type Prisma} from "@prisma/client"

export async function addInventoryUpdate(input: FormData) {
    const { qty, inventoryId, notes, invoiceNumber,supplier } = Object.fromEntries(input);

    const data:Prisma.InventoryUpdateCreateInput = {
        qty: parseFloat(qty.toString()),
        inventory:{connect:{id:inventoryId.toString()}} ,
        notes: notes.toString(),
        invoiceNumber: invoiceNumber.toString(),
        supplier:supplier.toString()
    };

    console.log('inventory update data: ',data)
    


    try {

     const currentInvetory =   await prisma.inventory.findFirst({
            where:{
                id:inventoryId.toString()
            }
            
        });
        await prisma.inventoryUpdate.create({
            data
        });

        await prisma.inventory.update({
            where:{
                id:inventoryId.toString()
            },
            data:{
                qty:currentInvetory.qty + data.qty
            }
        })


    } catch (error) {
        console.error('Error adding inventory update:', error);
        throw error;
    }

    redirect(`/admin/inventory-logs/list/${inventoryId}`);
}
