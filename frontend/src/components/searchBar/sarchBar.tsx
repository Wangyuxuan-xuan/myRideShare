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
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
interface SearchBarProps {
    tripResultService : TripResultService;
}

function SearchBar({tripResultService} : SearchBarProps) {

    const {searchBarStore} = tripResultService;
    const theme = createTheme();

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
            <div className="search-bar-outer">
                <ThemeProvider theme={theme}>
                    <Container component="main" maxWidth="xl" className="search-bar-container">
                        <CssBaseline />
                        <Box
                            sx={{
                                marginTop: 8,
                                padding : 20,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography component="h1" variant="h4">
                                Search for Trip Offers
                            </Typography>
                            <Box component="form" sx={{ mt: 3 }} >
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm = {6}>


                                        <TextField
                                            onChange={(e) => {
                                                searchBarStore.updateDeparture(e);
                                            }}
                                            className="departure-textField"
                                            placeholder="Departure place"
                                            variant="outlined"
                                            color="primary"
                                            name=""
                                            required
                                            fullWidth
                                            label=""
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm = {6}>
                                        <TextField
                                            onChange={(e) => {
                                                searchBarStore.updateDestination(e);
                                            }}
                                            type="text"
                                            placeholder="Destination"
                                            className = "destination-textField"
                                            variant="outlined"
                                            color="primary"
                                            name=""
                                            required
                                            fullWidth
                                            label=""
                                            autoFocus
                                        />
                                    </Grid>
                                    <Grid item xs={12} >
                                        <DatePickerComponent tripResultService={tripResultService}/>
                                    </Grid>
                                    <Grid item xs={12} alignItems= "center">
                                        <Link to= "/result">
                                            <Button
                                                type="submit"
                                                color="primary"
                                                variant="contained"
                                                onClick={handleSearchClick}
                                                className="search-btn"
                                                fullWidth
                                            >
                                                Search
                                            </Button>
                                        </Link>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </ThemeProvider>
            </div>

        }

        </Observer>


    )
}

export default SearchBar;