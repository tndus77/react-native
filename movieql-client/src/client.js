import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8000/",
    cache: new InMemoryCache(),
});

client.query({
    query: gql`
    `
}).then(data => console.log(data))

export default client;