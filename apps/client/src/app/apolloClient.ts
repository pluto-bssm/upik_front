// src/apolloClient.ts

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
<<<<<<< HEAD
  // uri: "http://10.150.149.229:8080/graphql", // GraphQL API 엔드포인트
=======
>>>>>>> 9e2ff44bda995018e4e17f34122dac01a6f7f15c
  uri: process.env.NEXT_PUBLIC_BACKEND_URL,
  cache: new InMemoryCache(),
});


export default client;
