import "./searchBar.css";
import {CustomButton} from "../button/CustomButton";
import React from "react";
import {DatePickerComponent} from "./DatePickerComponent";
import {Link} from "react-router-dom";
import {PublicAppStore} from "../../store/PublicAppStore";
import {SearchBarStore} from "../../store/SearchBarStore";



function SearchBar() {


    // let departure =  (document.getElementById("text-departure") as HTMLInputElement).value;
    const publicAppStore =  new PublicAppStore();
    const searchBarStore = publicAppStore.searchBarStore;

    const handleSearchClick = () => {
        console.log("clicked ");
        let departure =  (document.getElementById("text-departure") as HTMLInputElement).value;
        let destination =  (document.getElementById("text-destination") as HTMLInputElement).value;
        // let startTime =  (document.getElementById("text-departure") as HTMLInputElement).value;
        // let endTime =  (document.getElementById("text-departure") as HTMLInputElement).value;
        let date : Date =  searchBarStore.selectedDate;
        let time : Date = searchBarStore.selectedTime;
        console.log(departure);
        console.log(destination);
        console.log(date.toDateString());
        console.log(time.toTimeString());
    }
    
    return(

        <div className="main">
            <h1>search bar</h1>
            <div className= "search-bar">
                <div className = "input-areas">
                    <form className = "input-form">
                        <input type="text" name = "text" id = "text-departure" placeholder="Departure place" className = "search-input"/>
                        <input type="text" name = "text" id = "text-destination" placeholder="Destination" className = "search-input"/>
                        <DatePickerComponent/>
                        <Link to= "/result">
                            <CustomButton type = "submit" buttonStyle = "btn--primary" className = "search-btn" onclick = {handleSearchClick}>
                                Search
                            </CustomButton>
                        </Link>

                    </form>
                </div>
            </div>

        </div>

    )
}

export default SearchBar;