import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://10.129.58.51:8080/graphql",
    cache: new InMemoryCache(),
});