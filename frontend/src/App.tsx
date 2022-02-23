import React from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import Search from "./components/Pages/Search";
import Personal from "./components/Pages/Personal";
import SignUp from "./components/Pages/SignUp";
import Footer from "./components/footer/Footer";
import SignIn from "./components/Pages/SignIn";

function App() {
  return (

      <Router>
          <div className="App">
              <Navbar/>
          </div>
          <Routes>
              <Route path = "/" element={<Home/>}/>
              <Route path = "/search" element={<Search/>}/>
              <Route path = "/personal" element={<Personal/>}/>
              <Route path = "/sign-up" element={<SignUp/>}/>
              <Route path = "/sign-in" element={<SignIn/>}/>
          </Routes>
          <Footer/>
      </Router>

  );
}

export default App;
