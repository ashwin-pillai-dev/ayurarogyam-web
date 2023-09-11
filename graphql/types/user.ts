import { extendType, objectType } from 'nexus'
import prisma from '../../lib/prisma'

export const User = objectType({
    name: 'User',
    definition(t) {
        t.nonNull.string('id');
        t.nonNull.string('email');
        // t.nonNull.string('createdAt');
        // t.nonNull.string('updatedAt');
    }
});

export const userQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('users', {
            type: 'User',
            async resolve(_parent, _args, ctx) {
                try {
                    console.log('Resolver executed');
                    const users = await ctx.prisma.user.findMany();
                    console.log(users); // Log the result
                    return users;
                } catch (error) {
                    console.error('Error in resolver:', error);
                    throw error;
                }
            }
        })
    }
})

