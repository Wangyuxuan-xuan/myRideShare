import "./searchBar.css";
import {CustomButton} from "../button/CustomButton";
import React from "react";
import {DatePickerComponent} from "./DatePickerComponent";
import {Link} from "react-router-dom";
import {PublicAppStore} from "../../store/PublicAppStore";
import {SearchBarStore} from "../../store/SearchBarStore";
import {Observer} from "mobx-react-lite";
import {PublicAppService} from "../../service/PublicAppService";
import {TripResultService} from "../../service/TripResultService";

interface SearchBarProps {
    tripResultService : TripResultService;
}

function SearchBar({tripResultService} : SearchBarProps) {

    const {searchBarStore} = tripResultService;


    const handleSearchClick = () => {

        let departure =  (document.getElementById("text-departure") as HTMLInputElement).value;
        let destination =  (document.getElementById("text-destination") as HTMLInputElement).value;
        // let startTime =  (document.getElementById("text-departure") as HTMLInputElement).value;
        // let endTime =  (document.getElementById("text-departure") as HTMLInputElement).value;
        let date : Date =  searchBarStore.selectedDate;
        let time : Date = searchBarStore.selectedTime;

        console.log(date.toDateString());
        console.log(time.toTimeString());

        searchBarStore.departure = departure;
        searchBarStore.destination = destination;

        console.log("store" + searchBarStore.departure + searchBarStore.destination);

        // const getTrips = async () => {
        //
        //     const success = await tripResultService.getTripInfo();
        //
        //     // console.log(trips);
        //     return success;
        // }
        // getTrips();

    }
    
    return(

        <Observer>{() =>
            <div className="main">
                <h1>search bar</h1>
                <div className= "search-bar">
                    <div className = "input-areas">
                        <form className = "input-form">
                            <input type="text" name = "text" id = "text-departure"
                                   placeholder="Departure place" className = "search-input"
                                   onChange={(e) => {
                                       searchBarStore.updateDeparture(e);
                                   }}

                            />
                            <input type="text" name = "text" id = "text-destination"
                                   placeholder="Destination" className = "search-input"
                                   onChange={(e) => {
                                       searchBarStore.updateDestination(e);
                                   }}
                            />
                            <DatePickerComponent tripResultService={tripResultService}/>
                            <Link to= "/result">
                                <CustomButton type = "submit" buttonStyle = "btn--primary" className = "search-btn" onclick = {handleSearchClick}>
                                    Search
                                </CustomButton>
                            </Link>

                        </form>
                    </div>
                </div>

            </div>
        }

        </Observer>


    )
}

export default SearchBar;