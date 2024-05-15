import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Users from "./pages/User";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // Replace with your GraphQL API endpoint
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload..........
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Users />
      </div>
    </ApolloProvider>
  );
}

export default App;
