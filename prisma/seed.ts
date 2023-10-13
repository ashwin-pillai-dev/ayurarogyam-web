import { PrismaClient, Prisma } from "@prisma/client";
import prisma from '../lib/prisma'
import bcrypt from 'bcryptjs';
import { NextResponse } from "next/server";



// const prisma = new PrismaClient();

async function main() {

    const params:any = {
  skip: 0,
  take: 10,
  where: { name: { contains: 'te', mode: 'insensitive' } },
  include: { products: true, inventoryType: true }
}

      const res = await prisma.inventory.findMany(params);

      const resp = NextResponse.json(res)


      console.log(await resp.json());
      
   




    // const superAdmin: Prisma.AdminCreateInput = {
    //     name: 'Anil Pillai',
    //     email: 'anilPillai.vibrant@gmail.com',
    //     password: await bcrypt.hash('123456789', 10),
    //     contactNumber:'8087979983',
    //     role: {
    //         create:{
    //             roleName:'admin',
    //         }
    //     }

    // }

    // const admin = await prisma.admin.create({
    //     data: superAdmin,
    //     include: {
    //         role: true,
    //     },
    // });
}
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    }).finally(async () => {
        await prisma.$disconnect();
    })