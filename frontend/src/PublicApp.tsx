import React from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
// @ts-ignore
import Search from "./components/Pages/Search";
// @ts-ignore
import Personal from "./components/Pages/Personal";
import SignUp from "./components/Pages/SignUp";
import Footer from "./components/footer/Footer";
// @ts-ignore
import SignInPage from "./components/Pages/SignInPage";
import {DatePickerComponent} from "./components/searchBar/DatePickerComponent";
import Result from "./components/Pages/Result";
import {PublicAppService} from "./service/PublicAppService";
import NewTripForm from "./components/NewTripForm/NewTripForm";

// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

export interface IPublicProps{
    services : PublicAppService
}
function PublicApp(props : IPublicProps) {
  return (

          <Router>
              <div className="App">
                  <Navbar/>
              </div>
              <Routes>
                  <Route path = "/" element={<Home/>}/>
                  <Route path = "/search" element={<Search services={props.services.tripResultService}/>}/>
                  <Route path = "/personal" element={<Personal/>}/>
                  <Route path = "/sign-up" element={<SignUp/>}/>
                  <Route path = "/sign-in" element={<SignInPage loginService={props.services.loginService}/>}/>
                  <Route path = "/result" element={<Result tripResultService={props.services.tripResultService}/>}/>
                  <Route path = "/trip/new" element={<NewTripForm tripPostService={props.services.tripPostService}/>}/>
              </Routes>
              <Footer/>
          </Router>




  );
}

export default PublicApp;
