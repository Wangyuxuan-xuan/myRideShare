import {Component} from "react";
import {Navigate , Outlet  } from "react-router-dom";
import {LoginInService} from "./service/LoginInService";

interface IPrivateRouteProps {
    isDriverLoggedIn : boolean
    isCustomerLoggedIn : boolean
    user : string;
}
export default function PrivateRoute({isDriverLoggedIn,isCustomerLoggedIn,user} : IPrivateRouteProps){

    let auth ;
    if (user === "driver"){
        console.log(isDriverLoggedIn);
        auth = isDriverLoggedIn;

        return auth ? <Outlet/> : <Navigate to="/sign-in"/>
    }else {
        auth = isCustomerLoggedIn;

        return auth ? <Outlet/> : <Navigate to="/sign-in"/>
    }

}