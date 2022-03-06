import React, {useState} from 'react';

import './App.css';
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
// @ts-ignore
import Search from "./components/Pages/Search";
// @ts-ignore
import Personal from "./components/Pages/Personal";
import SignUpPage from "./components/Pages/SignUpPage";
import Footer from "./components/footer/Footer";
// @ts-ignore
import SignInPage from "./components/Pages/SignInPage";
import {DatePickerComponent} from "./components/searchBar/DatePickerComponent";
import Result from "./components/Pages/Result";
import {PublicAppService} from "./service/PublicAppService";
import NewTripForm from "./components/NewTripForm/NewTripForm";
import PrivateRoute from "./PrivateRoute";
import {Observer} from "mobx-react-lite";
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';

export interface IPublicProps{
    services : PublicAppService
}
function PublicApp(props : IPublicProps) {

    const [isDriverLoggedIn ,setIsDriverLoggedIn] = useState(false);

    console.log("public app ran")
    console.log("isDriverLoggedIn " + isDriverLoggedIn);

  return (

          <Router>
              <div className="App">
                  <Navbar/>
              </div>

                  <Observer>{() => {
                      return (
                          <Routes>
                              <Route path = "/" element={<Home/>}/>
                              <Route path = "/search" element={<Search services={props.services.tripResultService}/>}/>
                              <Route path = "/personal" element={<Personal/>}/>
                              <Route path = "/sign-up" element={<SignUpPage signUpService={props.services.signUpService}/>}/>
                              <Route path = "/sign-in" element={<SignInPage loginService={props.services.loginService}
                                                                            changeLogInState={(isLoggedIn : boolean) => {
                                                                                setIsDriverLoggedIn(isLoggedIn)
                                                                            }}/>}/>
                              <Route path = "/result" element={<Result tripResultService={props.services.tripResultService}/>}/>
                              <Route path = "/" element={<PrivateRoute isDriverLoggedIn={isDriverLoggedIn} user="driver"/>} >
                                  <Route path = "/trip/new" element={<NewTripForm tripPostService={props.services.tripPostService}/>}/>
                              </Route>
                          </Routes>
                          )
                  }}
                  </Observer>

              <Footer/>
          </Router>

  );
}

export default PublicApp;
