
export const resolvers = {
    Query:{
        users:async (_parent:any,_args:any,ctx:any)=> await ctx.prisma.user.findMany(),
    }

}