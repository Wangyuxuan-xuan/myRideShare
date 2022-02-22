import React from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (

      <Router>
          <div className="App">
              <Navbar/>
          </div>
          <Routes>
              <Route path = "/" element={<Home/>}/>
          </Routes>
      </Router>

  );
}

export default App;
