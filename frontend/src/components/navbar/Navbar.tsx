import React, {useEffect, useState} from "react";
import {MenuItems} from "./MenuItems";
import "./Navbar.css"
import {CustomButton} from "../button/CustomButton";
import {Link} from "react-router-dom";


const Navbar = () => {

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
                        <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                            product
                        </Link>
                    </li>
                    <li className= "nav-item">
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                {button && <CustomButton buttonStyle = "btn--outline">SIGN UP</CustomButton>}
            </nav>
        </>

    );
}

export default Navbar;