import { extendType, objectType } from 'nexus'

export const Categories = objectType({
    name: 'Categories',
    definition(t) {
        t.nonNull.string('name');
        t.nonNull.string('image');

    }
});

export const categoriesQuery = extendType({
    type: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('categories', {
            type: 'Categories',
            async resolve(_parent, _args, ctx) {
                try {                    
                    const categories =  ctx.prisma.category.findMany()
                    return categories;
                } catch (error) {
                    console.error('Error in resolver:', error);
                    throw error;
                }
            }
        })
    }
})

