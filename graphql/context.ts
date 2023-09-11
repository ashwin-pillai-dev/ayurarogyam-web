import { PrismaClient } from '@prisma/client'
import prisma from '../lib/prisma'


export type Context = {
    prisma: PrismaClient
    token: String
};

export async function createContext(req: any, res: any): Promise<Context> {

    const headersMap= req.headers;    
    const bearerToken = headersMap.get('authorization')??''
    const token =  bearerToken.split(' ')[1]
    // console.log(token);
    
    // let admin = null
    // if (token !== '') {
    //     const decodedToken = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    //     if (decodedToken || decodedToken.adminId) {
    //         admin = await prisma.admin.findUnique({
    //             where: { id: decodedToken.adminId },
    //         });
    //     }
    // }

    return {
        prisma,
        token
    };
}