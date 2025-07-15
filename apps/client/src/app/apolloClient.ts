// src/apolloClient.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://10.150.149.229:8080/graphql", // GraphQL API 엔드포인트
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});

export default client;
