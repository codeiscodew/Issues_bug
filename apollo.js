import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost/4001", // Replace with your GraphQL server's URL
  cache: new InMemoryCache(),
});

export default client;
