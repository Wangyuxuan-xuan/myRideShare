import {useParams} from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as ReactLink} from "react-router-dom";
import {UserProfileService} from "../../service/UserProfileService";
import {CustomerDTO, DriverDTO} from "../../generated/restclient";

const theme = createTheme();

function TripDetails() {

    const {id} = useParams();

    const {data : trip, isPending , error} = useFetch("http://localhost:8080/api/trips/"+ id) ;

    return (
        <div>

            {isPending && <div>Loading ...</div>}
            {error && <div> {error}</div>}

            {trip && (



            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="lg">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            marginBottom : 18,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Trip Details
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm = {4}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Car Model"
                                        id="re-password"
                                        autoComplete="new-password"
                                        defaultValue={trip?.carModel}
                                    />
                                </Grid>
                                <Grid item xs={12} sm = {4}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Car License Plate"
                                        id="re-password"
                                        autoComplete="new-password"
                                        defaultValue={trip?.carLicensePlate}
                                    />
                                </Grid>
                                <Grid item xs={12} sm = {4}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Capacity"
                                        id="re-password"
                                        autoComplete="new-password"
                                        defaultValue={trip.maxNumOfPassengers}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.name = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        autoComplete="given-name"
                                        name="firstName"
                                        disabled={true}
                                        fullWidth
                                        id="firstName"
                                        label="Driver"
                                        autoFocus
                                        defaultValue={trip.driverName}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.phoneNumber = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        id="phone-number"
                                        label="Phone Number"
                                        name="lastName"
                                        autoComplete="phone-number"
                                        defaultValue={trip.driverPhone}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.email = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        id="email"
                                        label="Join Date"
                                        name="Driver Joined Date"
                                        autoComplete="email"
                                        defaultValue={trip.driverJoinedDate}
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.password = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Driver Rate"
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        defaultValue={trip.driverCurrentRate}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Departure - Destination"
                                        id="re-password"
                                        defaultValue={trip.startLocation + " - " + trip.endLocation}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Time"
                                        id="re-password"
                                        defaultValue={trip.startTime + " - " + trip.endTime}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Price"
                                        id="re-password"
                                        defaultValue={trip.price}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            // signUpStore.rePassword = e.target.value;
                                        }}
                                        variant="outlined"
                                        color="primary"
                                        disabled={true}
                                        fullWidth
                                        name="password"
                                        label="Description"
                                        id="re-password"
                                        multiline
                                        rows={4}
                                        defaultValue={trip.description}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        color="primary"
                                        variant="contained"
                                        size="large"
                                        onClick={async (e) => {
                                            e.preventDefault();

                                        }}
                                    >
                                        Book This Trip
                                    </Button>
                                </Grid>

                            </Grid>


                            {/*<Grid container justifyContent="flex-end">*/}
                            {/*    <Grid item>*/}
                            {/*        <Link href="#" variant="body2">*/}
                            {/*            Already have an account? Sign in*/}
                            {/*        </Link>*/}
                            {/*    </Grid>*/}
                            {/*</Grid>*/}
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            )}
        </div>

    )
}

export default TripDetails;