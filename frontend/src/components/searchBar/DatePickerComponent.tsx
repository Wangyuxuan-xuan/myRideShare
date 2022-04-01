import React, {useState} from "react";

import "date-fns";
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";
import {MaterialUiPickersDate} from "@material-ui/pickers/typings/date";
import {PublicAppStore} from "../../store/PublicAppStore";
import {TripResultService} from "../../service/TripResultService";

interface DatePickerComponentProps {
    tripResultService : TripResultService;
}
export const DatePickerComponent = ({tripResultService} : DatePickerComponentProps) => {
    // const [dateValue, setDateValue] = useState(null);

    const {searchBarStore} = tripResultService;

    const [selectedDate,setSelectedDate] = useState(Date.now);
    const [selectedTime,setSelectedTime] = useState(Date.now);

    const handleDateChange = (date : any) => {
        setSelectedDate(date)

        searchBarStore.selectedDate = date;
        console.log(searchBarStore.selectedDate)
    }

    const handleTimeChange = (time : any) => {
        setSelectedTime(time)

        searchBarStore.selectedTime = time;
        console.log(searchBarStore.selectedTime)
    }

    return(

        <div>
            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <Grid container justifyContent="space-around">
                    <Grid item xs={12} sm = {6}>
                        <KeyboardDatePicker
                            style = {{
                                marginRight : 14
                            }}
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
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm = {6}>
                        <KeyboardTimePicker
                            style = {{
                                marginLeft : 14
                            }}
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
                            fullWidth
                        />
                    </Grid>
                </Grid>
            </MuiPickersUtilsProvider>
        </div>

    )

}
