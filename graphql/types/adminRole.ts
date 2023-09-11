import { intArg, extendType, nonNull, objectType, stringArg } from "nexus";

export const AdminRole = objectType({
    name: 'AdminRole',
    definition(t) {
      t.int('id');
      t.string('roleName');
      t.dateTime('createdAt');
      t.dateTime('updatedAt');
    },
  });

  export const AdminRoleQueryQuery = extendType({
    type: 'Query',
    definition(t) {
      t.nonNull.list.nonNull.field('adminRoles', {
        type: 'AdminRole', 
        resolve: async (_parent, _args, ctx) => {
          try {                    
            const adminRoles = await ctx.prisma.adminRole.findMany();          
            return adminRoles;
          } catch (error) {
            console.error('Error in resolver:', error);
            throw error;
          }
        },
      });
  
      t.field('adminRoleById', {
        type: 'AdminRole',
        args: {
          id: nonNull(intArg()),
        },
        resolve: async (_parent, { id }, ctx) => {
          try {
            const adminRole = await ctx.prisma.adminRole.findUnique({
              where: {id:Number(id)},
            });
            if (!adminRole) {
              throw new Error(`Admin Role with ID ${id} not found.`);
            }
            return adminRole;
          } catch (error) {
            console.error('Error in resolver:', error);
            throw error;
          }
        },
      });
  
      // You can add more admin-related queries here as needed
    },
  });


  export const AdminRolesMutation = extendType({
    type: 'Mutation',
    definition(t) {
      // Create AdminRole
      t.field('createAdminRole', {
        type: 'AdminRole',
        args: {
          roleName: nonNull(stringArg()),
        },
        resolve: async (_, { roleName }, ctx) => {
          try {
            const adminRole = await ctx.prisma.adminRole.create({
              data: {
                roleName,
              },
            });
            return adminRole;
          } catch (error) {
            console.error('Error in createAdminRole resolver:', error);
            throw error;
          }
        },
      });
  
      // Update AdminRole
      t.field('updateAdminRole', {
        type: 'AdminRole',
        args: {
          id: nonNull(intArg()),
          roleName: nonNull(stringArg()),
        },
        resolve: async (_, { id, roleName }, ctx) => {
          try {
            const adminRole = await ctx.prisma.adminRole.update({
              where: { id },
              data: {
                roleName,
              },
            });
            return adminRole;
          } catch (error) {
            console.error('Error in updateAdminRole resolver:', error);
            throw error;
          }
        },
      });
  
      // Delete AdminRole
      t.field('deleteAdminRole', {
        type: 'AdminRole',
        args: {
          id: nonNull(intArg()),
        },
        resolve: async (_, { id }, ctx) => {
          try {
            const adminRole = await ctx.prisma.adminRole.delete({
              where: { id },
            });
            return adminRole;
          } catch (error) {
            console.error('Error in deleteAdminRole resolver:', error);
            throw error;
          }
        },
      });
    },
  });
  

