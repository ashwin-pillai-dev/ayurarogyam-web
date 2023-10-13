import { gql, useQuery } from '@apollo/client';

export const GET_AGENTS = gql`
  query GetAgents {
    admins {
    name
    email
     }
  }
`;