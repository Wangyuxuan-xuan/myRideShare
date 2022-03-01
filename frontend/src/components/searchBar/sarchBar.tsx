import "./searchBar.css";
import {CustomButton} from "../button/CustomButton";
import React, {useState} from "react";
import {DatePickerComponent} from "./DatePickerComponent";
import {Link} from "react-router-dom";
import {PublicAppStore} from "../../store/PublicAppStore";
import {SearchBarStore} from "../../store/SearchBarStore";
import "date-fns";
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import {PublicAppService} from "../../service/PublicAppService";



function SearchBar() {
    const publicAppStore =  new PublicAppStore();
    const searchBarStore = publicAppStore.searchBarStore;
    const tripResultStore = publicAppStore.tripResultStore;

    const publicAppService = new PublicAppService(publicAppStore);
    const tripResultService =  publicAppService.tripResultService;

    const [selectedDate,setSelectedDate] = useState(Date.now);
    const [selectedTime,setSelectedTime] = useState(Date.now);

    const handleDateChange = (date : any) => {
        setSelectedDate(date)

        searchBarStore.updateSelectedDate(date);
    }

    const handleTimeChange = (time : any) => {
        setSelectedTime(time)

        searchBarStore.updateSelectedTime(time);
    }

    console.log(selectedDate + selectedTime);

    const handleSearchClick = () => {
        console.log("clicked ");
        let departure =  (document.getElementById("text-departure") as HTMLInputElement).value;
        let destination =  (document.getElementById("text-destination") as HTMLInputElement).value;
        let date =  (document.getElementById("date-picker") as HTMLInputElement).value;
        let time =  (document.getElementById("time-picker") as HTMLInputElement).value;

        console.log(departure);
        console.log(destination);
        console.log(date);
        console.log(time);

        // const getTrips = async () => {
        //
        //     const success = await tripResultService.getTripInfo();
        //     await tripResultStore.trips;
        //     // console.log(trips);
        //     return success;
        // }
        // getTrips();
    }
    
    return(

        <div className="main">
            <h1>search bar</h1>
            <div className= "search-bar">
                <div className = "input-areas">
                    <form className = "input-form">
                        <input type="text" name = "text" id = "text-departure" placeholder="Departure place" className = "search-input"/>
                        <input type="text" name = "text" id = "text-destination" placeholder="Destination" className = "search-input"/>
                        <MuiPickersUtilsProvider utils={DateFnsUtils} >
                            <Grid container justifyContent="space-around">
                                <KeyboardDatePicker
                                    // disableToolbar
                                    variant = "inline"
                                    format = "MM/dd/yyy"
                                    margin = "normal"
                                    // margin-right = "20px"
                                    id = "date-picker"
                                    label = "Date Picker"
                                    value = {selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps = {
                                        {
                                            "aria-label" : "change date"
                                        }
                                    }
                                />

                                <KeyboardTimePicker
                                    margin = "normal"
                                    id = "time-picker"
                                    ampm={false}
                                    label = "Time Picker"
                                    value = {selectedTime}
                                    onChange={handleTimeChange}
                                    KeyboardButtonProps = {
                                        {
                                            "aria-label" : "change date"
                                        }
                                    }
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
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