'use server'
import { revalidatePath } from 'next/cache';
import prisma from '../../../lib/prisma';
import { Product } from '@prisma/client';
import { redirect } from 'next/navigation';
import { visit } from 'graphql';


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
                    partnerId: input.partner.leaderId,// Calculate the leader's commission
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

    console.log('Commission:');
    console.log(commissions);



    try {
        const partner = input.partner;
        console.log(`partner in salea action:`);
        console.log(partner);
        // Assuming the partner model is included in the input

        const newSale = await prisma.sale.create({
            include: {
                partner: true,
                invoice: {
                    include: {
                        client: true,
                        invoiceItem: true,
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
        revalidatePath(`/admin/sales/list`);

        return {};
    } catch (error: any) {
        console.error('Error adding inventory:', error);
        throw error;
    }
}




// export async function addSales(input: SalesParam) {


//     let subTotal: number = 0;
//     let qty: number = 0;

//     let invoiceItems: any = []

//     input.productWithPrices.forEach((obj) => {
//         subTotal += obj.total;
//         qty += obj.qty;
//         invoiceItems.push({
//             amount: obj.price,
//             total: obj.total,
//             quantity: obj.qty,
//             productId: obj.productId.toString()
//         }
//         )
//     });

//     const total = Math.ceil(subTotal + (16 / 100) * subTotal);

//     try {
//         const newSale = await prisma.sale.create({
//             include: {
//                 partner: true,
//                 invoice: {
//                     include: {
//                         client: true,
//                         invoiceItem: true,
//                     }
//                 }

//             },
//             data: {
//                 date: new Date(input.date),
//                 partnerId: input.partnerId,
//                 visitType: input.visitType,
//                 remarks: input.remarks,
//                 invoice: {
//                     create: {
//                         invoiceNumber: generateRandomInvoiceNumber(),
//                         quantity: qty,
//                         subTotal: subTotal,
//                         total: total,
//                         invoiceDate: new Date(input.date),
//                         isPaid: false,
//                         clientId: input.clientId,
//                     },
//                 },
//                 // Create a commission as 10% of the sale subtotal
//                 commissions: {
//                     create: {
//                         paid: false,
//                         dateOfPayment: new Date(input.date),
//                         amount: 0.10 * subTotal, // Calculate the commission amount based on subtotal
//                         partner: {
//                             connect: { id: input.partnerId },
//                         },
//                     },
//                 },
//             },
//         });

//         console.log('Sale with Invoice and Invoice Items created successfully.');
//         console.log(newSale);
//         revalidatePath(`/admin/sales/list`);
//         return newSale;
//     } catch (error: any) {
//         console.error('Error adding inventory:', error);
//         throw error;
//     }

// }


function generateRandomInvoiceNumber() {
    const timestamp = Date.now();

    // Combine the random characters, digits, and timestamp to create the invoice number
    const invoiceNumber = `INV-${timestamp}`;

    return invoiceNumber;
}