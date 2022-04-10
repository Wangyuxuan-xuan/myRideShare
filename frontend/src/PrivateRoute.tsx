import {Component} from "react";
import {Navigate , Outlet  } from "react-router-dom";
import {LoginInService} from "./service/LoginInService";

interface IPrivateRouteProps {
    isDriverLoggedIn : boolean
    isCustomerLoggedIn : boolean
    user : string;
}
export default function PrivateRoute({isDriverLoggedIn,isCustomerLoggedIn,user} : IPrivateRouteProps){

    if (user === "driver"){
        return isDriverLoggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
    }else {
        return isCustomerLoggedIn ? <Outlet/> : <Navigate to="/sign-in"/>
    }

}