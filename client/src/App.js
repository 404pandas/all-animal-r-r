import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context/index.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";

// Pages
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Donate from "./pages/Donate.js";
import Home from "./pages/Home.js";
import Login from "./pages/Login.js";
import NoMatch from "./pages/NoMatch.js";
import DonateHistory from "./pages/DonateHistory.js";
import Projects from "./pages/Projects.js";
import Signup from "./pages/Signup.js";
import Success from "./pages/Success.js";

// Components
import Header from "./components/Header";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Provider store={store}>
          <Header />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/donate' element={<Donate />} />
            <Route path='/donate-history' element={<DonateHistory />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/success' element={<Success />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NoMatch />} />
          </Routes>
        </Provider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
