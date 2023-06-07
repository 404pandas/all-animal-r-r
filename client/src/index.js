import React from "react";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import * as ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// Stylesheets
import "../src/assets/css/normalize.css";
import "../src/assets/css/style.css";

import App from "./App";

const httpLink = HttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers, ...context }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.contact(httpLink),
});

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
