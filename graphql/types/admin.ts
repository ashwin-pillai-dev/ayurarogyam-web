import { extendType, inputObjectType, nonNull, objectType, stringArg } from 'nexus'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyToken } from '../util'

//Admin Object Type
export const Admins = objectType({
    name: 'Admin',
    definition(t) {
        t.nonNull.string('id');
        t.nonNull.string('name');
        t.nonNull.string('email');
        t.nullable.string('profile');
        t.nonNull.boolean('enabled');
        t.nonNull.boolean('deleted');
        t.nonNull.string('password');
        t.int('adminRoleId');
        t.dateTime('createdAt');
        t.dateTime('updatedAt');
        t.field('role', { type: 'AdminRole' });
    },
});


// Input type for creating or updating an admin
export const AdminInput = inputObjectType({
    name: 'AdminInput',
    definition(t) {
        t.nonNull.string('name');
        t.nonNull.string('email');
        t.nullable.string('profile');
        t.nonNull.string('password');
        t.nonNull.int('adminRoleId');
    },
});



//Admin Response for token mutation
export const AdminLoginResponse = objectType({
    name: 'AdminLoginResponse',
    definition(t) {
        t.string('token');
    },
});



//Queries
export const Query = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('admins', {
            type: 'Admin',
            resolve: async (_parent, _args, ctx) => {
                try {
                    // Verify the token
                    // await verifyToken(ctx.token, ctx);
                    try {
                        const admins = await ctx.prisma.admin.findMany({
                            include: {
                                role: true
                            }
                        });
                        return admins;

                    } catch (error) {
                        throw new Error('Unable to fetch admins',);
                    }
                } catch (error) {
                    throw new Error('Token verification failed');
                }
            },
        });

        t.field('adminById', {
            type: 'Admin',
            args: {
                id: nonNull(stringArg()),
            },
            resolve: async (_parent, { id }, ctx) => {
                try {
                    await verifyToken(ctx.token, ctx);


                    const admin = await ctx.prisma.admin.findUnique({
                        include: {
                            role: true
                        },
                        where: { id },
                    });
                    if (!admin) {
                        throw new Error(`Admin with ID ${id} not found.`);
                    }
                    return admin;
                } catch (error) {
                    console.error('Error in resolver:', error);
                    throw error;
                }
            },
        });

        // You can add more admin-related queries here as needed
    },
});


export const AdminMutation = extendType({
    type: 'Mutation',
    definition(t) {
        // Create Admin
        t.field('createAdmin', {
            type: 'Admin',
            args: {
                input: nonNull('AdminInput'),
            },
            resolve: async (_, { input }, ctx) => {
                try {
                    const { password, ...rest } = input;
                    const hashedPassword = await bcrypt.hash(password, 10); 

                    const admin = await ctx.prisma.admin.create({
                        data: {
                            ...rest,
                            password: hashedPassword, 
                        },
                        include: {
                            role: true,
                        },
                    });

                    return admin;
                } catch (error) {
                    console.error('Error in createAdmin resolver:', error);
                    throw error;
                }
            },
        });


        //Update admin
        t.field('updateAdmin', {
            type: 'Admin',
            args: {
                id: nonNull(stringArg()),
                input: nonNull('AdminInput'),
            },
            resolve: async (_, { id, input }, ctx) => {
                try {
                    // const inputdata: any = input
                    const admin = await ctx.prisma.admin.update({
                        where: { id },
                        data: input,
                    });
                    return admin;
                } catch (error) {
                    console.error('Error in updateAdmin resolver:', error);
                    throw error;
                }
            },
        });

        // Delete Admin
        t.field('deleteAdmin', {
            type: 'Admin',
            args: {
                id: nonNull(stringArg()),
            },
            resolve: async (_, { id }, ctx) => {
                try {
                    const admin = await ctx.prisma.admin.delete({
                        where: { id },
                    });
                    return admin;
                } catch (error) {
                    console.error('Error in deleteAdmin resolver:', error);
                    throw error;
                }
            },
        });

        // Login admin
        t.field('loginAdmin', {
            type: 'AdminLoginResponse', 
            args: {

                email: nonNull(stringArg()),
                password: nonNull(stringArg())

            },
            resolve: async (_, { email, password }, ctx) => {
                try {
                    const admin = await ctx.prisma.admin.findUnique({
                        where: { email },
                    });

                    if (!admin) {
                        throw new Error('Admin not found.');
                    }

                    const passwordMatch = await bcrypt.compare(password, admin.password);

                    if (!passwordMatch) {
                        throw new Error('Invalid password.');
                    }

                    const token = jwt.sign(
                        { adminId: admin.id },
                        process.env.NEXTAUTH_SECRET, 
                        { expiresIn: '7 days' }
                    );

                    return { token };
                } catch (error:any) {
                    throw new Error('Login failed:' + error.message);
                }
            },
        });

        // Verify Admin
        t.field('verifyAdmin', {
            type: 'Admin', // Replace 'Admin' with the type that represents your Admin model
            args: {
                token: nonNull(stringArg()),
            },
            resolve: async (_, { token }, ctx) => {
                try {
                    const decodedToken = jwt.verify(token, process.env.NEXTAUTH_SECRET);

                    if (!decodedToken || !decodedToken.adminId) {
                        throw new Error('Invalid token.');
                    }

                    const admin = await ctx.prisma.admin.findUnique({
                        where: { id: decodedToken.adminId },
                    });

                    if (!admin) {
                        throw new Error('Admin not found.');
                    }

                    return admin;
                } catch (error) {
                    console.error('Error in verifyAdmin resolver:', error);
                    throw error;
                }
            },
        });

    },
});



