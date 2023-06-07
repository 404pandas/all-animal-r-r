import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";

// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import OrderHistory from "./pages/OrderHistory";
import Projects from "./pages/Projects";
import Signup from "./pages/Signup";
import Success from "./pages/Success";

// Components
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <StoreProvider>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/detail' element={<Detail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/*' element={<NoMatch />} />
            <Route path='/orderHistory' element={<OrderHistory />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/success' element={<Success />} />
          </Routes>
          {/* todo- build out footer */}
        </StoreProvider>
      </div>
    </Router>
  );
}

export default App;
