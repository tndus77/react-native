import { ApolloClient, InMemoryCache, ApolloProvider, gql, makeVar } from '@apollo/client';

export const isLoggedInVar = makeVar(false)

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

export default client;
