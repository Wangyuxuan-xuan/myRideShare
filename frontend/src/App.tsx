import React from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Product from "./components/Pages/Product";
import SignUp from "./components/Pages/SignUp";
import Footer from "./components/footer/Footer";

function App() {
  return (

      <Router>
          <div className="App">
              <Navbar/>
          </div>
          <Routes>
              <Route path = "/" element={<Home/>}/>
              <Route path = "/services" element={<Services/>}/>
              <Route path = "/products" element={<Product/>}/>
              <Route path = "/sign-up" element={<SignUp/>}/>
          </Routes>
          <Footer/>
      </Router>

  );
}

export default App;
