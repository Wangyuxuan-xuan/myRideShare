import React from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";

function App() {
  return (

      <Router>
          <div className="App">
              <Navbar/>
          </div>
          <Routes>
              <Route>

              </Route>
          </Routes>
      </Router>

  );
}

export default App;
