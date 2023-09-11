import { PrismaClient } from "@prisma/client"; 
import prisma from '../lib/prisma'

// const prisma = new PrismaClient();

async function main() {
    // const adminRoles = await prisma.admin.create({
    //     data:{
    //         name:'ashwin',
    //     }
    // })
    // console.log(adminRoles);
}
main()
    .catch((e)=>{
        console.error(e);
        process.exit(1);
    }).finally(async()=>{
        await prisma.$disconnect();
    })