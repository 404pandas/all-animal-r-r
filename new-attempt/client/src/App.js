import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";
import store from "./utils/store";

// Pages
import SearchBooks from "./pages/SearchBooks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrderHistory from "./pages/OrderHistory";
import Projects from "./pages/Projects";
import SavedBooks from "./pages/SavedBooks";
import Signup from "./pages/Signup";
import Success from "./pages/Success";

// Components
import Navbar from "./components/Navbar";

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
      authorization: token ? `Bearer ${token}` : "",
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
        <>
          <Provider store={store}>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/about' element={<About />} />
              <Route path='/donate' element={<Detail />} />
              <Route path='/order-history' element={<OrderHistory />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/success' element={<Success />} />
              <Route path='/searchbooks' element={<SearchBooks />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/saved' element={<SavedBooks />} />
              <Route path='*' element={<NoMatch />} />
            </Routes>
          </Provider>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;
