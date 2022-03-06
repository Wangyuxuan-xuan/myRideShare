import {Component} from "react";
import {Navigate , Outlet  } from "react-router-dom";
import {LoginInService} from "./service/LoginInService";

interface IPrivateRouteProps {
    isDriverLoggedIn : boolean
    user : string;
}
export default function PrivateRoute({isDriverLoggedIn,user} : IPrivateRouteProps){

    let auth ;
    if (user === "driver"){
        console.log(isDriverLoggedIn);
        auth = isDriverLoggedIn;

        return auth ? <Outlet/> : <Navigate to="/sign-in"/>
    }else {
        auth = isDriverLoggedIn;

        return auth ? <Outlet/> : <Navigate to="/sign-in"/>
    }

}