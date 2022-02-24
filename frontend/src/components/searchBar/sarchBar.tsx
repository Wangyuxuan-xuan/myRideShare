import "./searchBar.css";
import {CustomButton} from "../button/CustomButton";
import React from "react";
import {DatePickerComponent} from "./DatePickerComponent";



function SearchBar() {


    
    return(

        <div className="main">
            <h1>search bar</h1>
            <div className= "search-bar">
                <div className = "input-areas">
                    <form className = "input-form">
                        <input type="text" name = "text" placeholder="Departure place" className = "search-input"/>
                        <input type="text" name = "text" placeholder="Destination" className = "search-input"/>
                        <DatePickerComponent/>
                        <CustomButton buttonStyle = "btn--primary" className = "search-btn">Search</CustomButton>
                    </form>
                </div>
            </div>

        </div>

    )
}

export default SearchBar;