import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-scalars'
import { asNexusMethod } from 'nexus'



export const GQLDate = asNexusMethod(GraphQLDate,'date')
export const GQLTime = asNexusMethod(GraphQLTime,'time')
export const GQLDateTime = asNexusMethod(GraphQLDateTime,'dateTime')