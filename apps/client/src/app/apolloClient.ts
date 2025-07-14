// src/apolloClient.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_BACKEND_URL, // GraphQL API 엔드포인트
  cache: new InMemoryCache(),
});

export default client;
