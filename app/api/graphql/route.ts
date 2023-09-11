import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import {createContext}  from "../../../graphql/context"
import {schema} from '../../../graphql/schema'

const server = new ApolloServer({
  schema,
});

const handler = startServerAndCreateNextHandler(server,{
  context:createContext
});

export async function GET(request: Request) {
  return handler(request);
}

export async function POST(request: Request) {
  return handler(request);
}