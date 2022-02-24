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

// import TextField from '@mui/material/TextField';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

export const DatePickerComponent = () => {
    // const [dateValue, setDateValue] = useState(null);

    const [selectedDate,setSelectedDate] = useState(Date.now());

    const handleDateChange = (date : any) => {
        setSelectedDate(date)
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
                        label = "Time Picker"
                        value = {selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps = {
                            {
                                "aria-label" : "change date"
                            }
                        }
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>

        // <LocalizationProvider dateAdapter={AdapterDateFns}>
        //     <DatePicker
        //         label="Basic example"
        //         value={dateValue}
        //         onChange={(newValue) => {
        //             setDateValue(newValue);
        //         }}
        //         renderInput={(params) => <TextField {...params} />}
        //     />
        //
        // </LocalizationProvider>
    )
}
