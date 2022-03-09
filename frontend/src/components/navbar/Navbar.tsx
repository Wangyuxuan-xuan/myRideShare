import React, {useEffect, useState} from "react";
import {MenuItems} from "./MenuItems";
import "./Navbar.css"
import {CustomButton} from "../button/CustomButton";
import {Link} from "react-router-dom";

interface NavbarProps{
    isDriverLoggedIn : boolean,
    isCustomerLoggedIn : boolean
    changeDriverLogInState : any,
    changeCustomerLogInState : any
}

const Navbar = ({isDriverLoggedIn,isCustomerLoggedIn,changeCustomerLogInState,changeDriverLogInState} : NavbarProps) => {

    const [click , setClick] = useState(false); //should be false
    const [button , setButton] = useState(true);


    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }

    }

    window.addEventListener(("resize"),showButton);

    useEffect(() => {
        showButton()
    },[]);

    return(
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Rideshare <i className="fa-solid fa-car"/>
                    </Link>
                </div>

                <div className= "menu-icon" onClick={handleClick}>
                    <i className={click ?  "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className= "nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="/search" className="nav-links" onClick={closeMobileMenu}>
                            Search
                        </Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="/personal" className="nav-links" onClick={closeMobileMenu}>
                            Personal
                        </Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {
                    !(isCustomerLoggedIn || isDriverLoggedIn) &&
                    <Link to="/sign-up" className= "sign-up-btn">
                        {button && <CustomButton buttonStyle = "btn--outline">
                            SIGN UP
                        </CustomButton>}
                    </Link>
                }
                {
                    !(isCustomerLoggedIn || isDriverLoggedIn) &&
                    <Link to="/sign-in" className= "sign-in-btn">
                        {button && <CustomButton buttonStyle = "btn--primary">
                            SIGN IN
                        </CustomButton>}
                    </Link>
                }

                {
                    (isCustomerLoggedIn || isDriverLoggedIn) &&
                    <Link to="/" className= "sign-up-btn">
                        {button && <CustomButton buttonStyle = "btn--outline"
                                                 onclick = {()=>{changeDriverLogInState(false); changeCustomerLogInState(false);}}
                        >
                            SIGN OUT
                        </CustomButton>}
                    </Link>
                }

            </nav>
        </>

    );
}

export default Navbar;