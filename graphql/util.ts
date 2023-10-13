import jwt from 'jsonwebtoken';
import {Context} from './context'


export const verifyToken = async(token: String, ctx: Context) => {

    try {
        const decodedToken = jwt.verify(token, process.env.NEXTAUTH_SECRET);

        if (!decodedToken || !decodedToken.adminId) {
            throw new Error('Invalid token.');
        }

            return true;
  

        // const admin = await ctx.prisma.admin.findUnique({
        //     where: { id: decodedToken.adminId },
        // });
        

        // if (!admin) {
        //     throw new Error('Admin not found.');
        // }

        // return admin;

    }
    catch (error) {
        // console.error('Invalid or expired token:', error);
        throw new Error('Invalid or expired token');
    }
}
