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
import {CustomerDTO, DriverDTO} from "./generated/restclient";

export interface IPublicProps{
    services : PublicAppService
}
function PublicApp(props : IPublicProps) {

    const [isDriverLoggedIn ,setIsDriverLoggedIn] = useState(false);
    const [isCustomerLoggedIn ,setIsCustomerLoggedIn] = useState(false);
    const [currentDriverDTO , setCurrentDriverDTO] = useState<DriverDTO>();
    const [currentCustomerDTO , setcurrentCustomerDTO] = useState<CustomerDTO>();

    // console.log("public app ran")
    // console.log("isDriverLoggedIn " + isDriverLoggedIn);
    // console.log("isCustomerLoggedIn " + isCustomerLoggedIn);
    console.log(currentDriverDTO);
    console.log(currentCustomerDTO);
  return (

          <Router>
              <div className="App">
                  <Navbar isCustomerLoggedIn={isCustomerLoggedIn} isDriverLoggedIn={isDriverLoggedIn}
                          changeDriverLogInState={(isLoggedIn : boolean) => {
                              setIsDriverLoggedIn(isLoggedIn)}}
                          changeCustomerLogInState={(isLoggedIn : boolean) => {
                              setIsCustomerLoggedIn(isLoggedIn)}}
                  />
              </div>

                  <Observer>{() => {
                      return (
                          <Routes>
                              <Route path = "/" element={<Home/>}/>
                              <Route path = "/search" element={<Search services={props.services.tripResultService}/>}/>
                              <Route path = "/personal" element={<Personal/>}/>
                              <Route path = "/sign-up" element={<SignUpPage signUpService={props.services.signUpService}/>}/>
                              <Route path = "/sign-in" element={<SignInPage loginService={props.services.loginService}
                                                                            changeDriverLogInState={(isLoggedIn : boolean) => {
                                                                                setIsDriverLoggedIn(isLoggedIn)}}
                                                                            changeCustomerLogInState={(isLoggedIn : boolean) => {
                                                                                setIsCustomerLoggedIn(isLoggedIn)}}
                                                                            setCurrentDriver={(currentDriverDTO : DriverDTO) => {
                                                                                setCurrentDriverDTO(currentDriverDTO);}}
                                                                            setCurrentCustomer={(currentCustomerDTO : CustomerDTO) => {
                                                                                setcurrentCustomerDTO(currentCustomerDTO);
                                                                            }}

                              />}/>
                              <Route path = "/result" element={<Result tripResultService={props.services.tripResultService}/>}/>
                              <Route path = "/" element={<PrivateRoute isDriverLoggedIn={isDriverLoggedIn} isCustomerLoggedIn={isCustomerLoggedIn} user="driver"/>} >
                                  <Route path = "/trip/new" element={<NewTripForm tripPostService={props.services.tripPostService} currentDriverDTO={currentDriverDTO}/>}/>
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
