'use server'
import { revalidatePath } from 'next/cache';
import prisma from '../../../lib/prisma';
import { Product } from '@prisma/client';
import { redirect } from 'next/navigation';


export type ProductWithPrices = {
    productId: string
    price: number
    qty: number
    total: number
    product?: Product

}

export type SalesParam = {
    clientId: string
    partnerId: string
    partner: any
    date: string
    remarks: string
    visitType: string
    productWithPrices: ProductWithPrices[]

}

export async function addSales(input: SalesParam) {
    let subTotal: number = 0;
    let qty: number = 0;
    let invoiceItems: any = [];



    input.productWithPrices.forEach((obj) => {
        subTotal += obj.total;
        qty += obj.qty;
        invoiceItems.push({
            amount: obj.price,
            total: obj.total,
            quantity: obj.qty,
            productId: obj.productId.toString()
        });
    });

    const total = Math.ceil(subTotal + (12/ 100) * subTotal);
    let commissions: any = []

    console.log('visitType');
    console.log(input.visitType);
    console.log('leaderId:');
    console.log(input.partner.leaderId);



    if (input.visitType == '0') {
        if (input.partner.leaderId) {
            commissions = [
                {
                    paid: false,
                    dateOfPayment: new Date(input.date),
                    amount: 0.20 * subTotal,
                    partnerId: input.partner.id,
                },
                {
                    paid: false,
                    dateOfPayment: new Date(input.date),
                    amount: 0.05 * subTotal,
                    partnerId: input.partner.leaderId,
                }

            ]

        }

        else {
            commissions = [
                {
                    paid: false,
                    dateOfPayment: new Date(input.date),
                    amount: 0.10 * subTotal,
                    partnerId: input.partner.id,
                }
            ]

        }

    }
    let newSale;
    try {
        const partner = input.partner;
        console.log(`partner in salea action:`);
        console.log(partner);
        // Assuming the partner model is included in the input

        newSale = await prisma.sale.create({
            include: {
                partner: true,
                invoice: {
                    include: {
                        client: true,
                        invoiceItem: {
                            include:{
                                product:true
                            }
                        },
                    }
                }
            },
            data: {
                date: new Date(input.date),
                partnerId: partner.id, // Use the partner's ID from the input
                visitType: input.visitType,
                remarks: input.remarks,
                invoice: {
                    create: {
                        invoiceNumber: generateRandomInvoiceNumber(),
                        invoiceItem: {
                            create: invoiceItems
                        },
                        quantity: qty,
                        subTotal: subTotal,
                        total: total,
                        invoiceDate: new Date(input.date),
                        isPaid: false,
                        clientId: input.clientId,
                    },
                },
                // Create a commission as 10% of the sale subtotal for the partner
                commissions: {
                    create: commissions
                },
            },
        });

        console.log('Sale with Invoice and Invoice Items created successfully.');
        console.log(newSale);
        console.log('newSale.invocie.invoiceItems',newSale.invoice.invoiceItem);
        await updateInventory(newSale);
        

    } catch (error: any) {
        console.error('Error adding inventory:', error);
        throw error;
    }

    revalidatePath(`/admin/sales/list`);

    return {};
}



function generateRandomInvoiceNumber() {
    const timestamp = Date.now();

    // Combine the random characters, digits, and timestamp to create the invoice number
    const invoiceNumber = `INV-${timestamp}`;

    return invoiceNumber;
}

async function updateInventoryQuantity(inventoryId:string, quantity:number) {
    // Simulate updating the inventory quantity in the database
    await prisma.inventory.update({
        where: {
            id: inventoryId,
        },
        data: {
            qty: quantity
        },
      })
    console.log(`Updated inventory for inventory id ${inventoryId} to new quantity ${quantity}`);
  }

  async function getInventoryByProductId(productId:string) {
    // Simulate fetching inventory data from a database
    const inventory = await prisma.inventory.findMany({ where: { productId: productId } });
    console.log('inventory: ',inventory);
    
    return inventory[0];
  }

  async function updateInventory(newSale) {
    console.log(newSale);
    
    const invoiceItems = newSale.invoice.invoiceItem;
    console.log('invoice items', invoiceItems);
    
  
    for (const item of invoiceItems) {
      const productId = item.productId;
      const soldQuantity = item.quantity;
  
      // Fetch current inventory
      const inventory = await getInventoryByProductId(productId);
      
      if (inventory) {
        // Subtract sold quantity
        const newQuantity = inventory.qty - soldQuantity;
  
        // Update the inventory
        await updateInventoryQuantity(inventory.id, newQuantity);
      } else {
        console.log(`Inventory for product ID ${productId} not found`);
      }
    }
  }
  