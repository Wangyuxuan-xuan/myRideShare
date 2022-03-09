import * as React from 'react';
import "./NewTripForm.css"
import Box from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {ChangeEvent, useState} from "react";
import {TripPostService} from "../../service/TripPostService";
import {DriverDTO} from "../../generated/restclient";
import {DatePickerComponentEndTime} from "../SignUpForm/DatePickerComponentEndTime";
import {DatePickerComponentStartTime} from "../SignUpForm/DatePickerComponentStartTime";

const useStyles = makeStyles({
    field : {
        marginTop : 10,
        marginBottom : 10,

    }
})

interface NewTripFormProps {
    tripPostService : TripPostService
    currentDriverDTO : DriverDTO | undefined
}

function NewTripForm({tripPostService , currentDriverDTO} : NewTripFormProps) {

    const {newTripFormStore} = tripPostService;
    const classes = useStyles();
    const [departureError,setDepartureError] = useState(false);
    const [destinationError,setDestinationError] = useState(false);
    const [maxNumOfPassengerError,setMaxNumOfPassengerError] = useState(false);
    const [carIdError,setCarIdError] = useState(false);
    const [priceError,setPriceError] = useState(false)

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(newTripFormStore.departure === ""){
            setDepartureError(true);
        }else setDepartureError(false);

        if(newTripFormStore.destination === ""){
            setDestinationError(true);
        }else setDestinationError(false);

        if(newTripFormStore.maxNumOfPassenger === 0){
            setMaxNumOfPassengerError(true);
        }else setMaxNumOfPassengerError(false);

        if(newTripFormStore.carId === 0){
            setCarIdError(true);
        }else setCarIdError(false);

        if(newTripFormStore.price === 0){
            setPriceError(true);
        }else setPriceError(false);

        if(currentDriverDTO?.driverId)
        newTripFormStore.driverId = currentDriverDTO?.driverId;

        if(newTripFormStore.departure && newTripFormStore.destination
            && newTripFormStore.maxNumOfPassenger && newTripFormStore.carId
            && newTripFormStore.driverId && newTripFormStore.price){
            console.log("departure :" +newTripFormStore.departure + " destination: "
                + newTripFormStore.destination + " maxNumOfPassenger: "
                + newTripFormStore.maxNumOfPassenger + " carId: "
                + newTripFormStore.carId + " driverId: "
                + newTripFormStore.driverId + " price: "
                + newTripFormStore.price);

            tripPostService.saveTrip()
        }
    }

    return (
        <div className= "new-trip-form">

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-columns">
                    <ul>
                        <TextField
                            onChange={(e) => {
                                newTripFormStore.departure = e.target.value;
                            }}
                            className={classes.field}
                            label= "Departure"
                            variant="outlined"
                            color="primary"
                            required
                            error={departureError}

                        />
                        <TextField
                            onChange={(e) => {
                                newTripFormStore.destination = e.target.value;
                            }}
                            className={classes.field}
                            label= "Destination"
                            variant="outlined"
                            color="primary"
                            required
                            error={destinationError}
                        />


                    </ul>
                    <ul>
                        <TextField
                            onChange={(e) => {
                                newTripFormStore.maxNumOfPassenger = Number(e.target.value);
                            }}
                            className={classes.field}
                            label= "max number of passenger"
                            variant="outlined"
                            type="number"
                            color="primary"
                            required
                            error={maxNumOfPassengerError}

                        />

                        <TextField
                            onChange={(e) => {
                                newTripFormStore.carId = Number(e.target.value);
                            }}
                            className={classes.field}
                            label= "car id"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={carIdError}
                        />

                    </ul>
                    <ul>
                        <DatePickerComponentStartTime tripPostService={tripPostService}/>
                    </ul>
                    <ul>
                        <DatePickerComponentEndTime tripPostService={tripPostService}/>
                    </ul>

                </div>

                <TextField
                    onChange={(e) => {
                        newTripFormStore.price = Number(e.target.value);
                    }}
                    className={classes.field}
                    label= "price"
                    variant="outlined"
                    color="primary"
                    required
                    error={priceError}
                />

                <TextField
                    onChange={(e) => {
                        newTripFormStore.description = e.target.value;
                    }}
                    className={classes.field}
                    label= "description(optional)"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    multiline
                    rows={4}
                />

                {/*Submit Button should be inside the form*/}
                <Button
                    type="submit"
                    color="secondary"
                    variant="contained">
                    Submit
                </Button>


            </form>



        </div>
    )
}

export default NewTripForm;