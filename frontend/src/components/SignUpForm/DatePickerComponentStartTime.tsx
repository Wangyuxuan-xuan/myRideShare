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
import {TripPostService} from "../../service/TripPostService";

interface DatePickerComponentProps {
    tripPostService : TripPostService
}
export const DatePickerComponentStartTime = ({tripPostService} : DatePickerComponentProps) => {
    // const [dateValue, setDateValue] = useState(null);

    const {newTripFormStore} = tripPostService;

    const [selectedDate,setSelectedDate] = useState(Date.now);
    const [selectedTime,setSelectedTime] = useState(Date.now);

    const handleDateChange = (date : any) => {
        setSelectedDate(date)

        newTripFormStore.startTimeDate = date;
    }

    const handleTimeChange = (time : any) => {
        setSelectedTime(time)

        newTripFormStore.startTimeTime = time;
    }

    return(

        <div>
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
        </div>

    )

}
