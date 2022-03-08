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

interface CustomerProfileProps {
    userProfileService : UserProfileService,
    currentDriverDTO : DriverDTO ,
}


function DriverProfile({userProfileService,currentDriverDTO} : CustomerProfileProps) {

    const {userProfileStore} = userProfileService;

    return (
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
                        Account Details
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.name = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    disabled={true}
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    autoFocus
                                    defaultValue={currentDriverDTO.name}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.phoneNumber = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    id="phone-number"
                                    label="Phone Number"
                                    name="lastName"
                                    autoComplete="phone-number"
                                    defaultValue={currentDriverDTO.phone}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.email = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    defaultValue={currentDriverDTO.email}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.password = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    defaultValue={currentDriverDTO.password}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.rePassword = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    name="password"
                                    label="Address"
                                    id="re-password"
                                    autoComplete="new-password"
                                    defaultValue={currentDriverDTO.address}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.rePassword = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    name="password"
                                    label="Join Date"
                                    id="re-password"
                                    defaultValue={currentDriverDTO.joinedDate}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        // signUpStore.rePassword = e.target.value;
                                    }}
                                    variant="filled"
                                    color="primary"
                                    required
                                    disabled={true}
                                    fullWidth
                                    name="password"
                                    label="Description"
                                    id="re-password"
                                    multiline
                                    rows={4}
                                    defaultValue={userProfileStore.description}
                                />
                            </Grid>
                            <ReactLink to="/trip/new">
                                <Button
                                    type="submit"
                                    color="secondary"
                                    variant="outlined"
                                >
                                    To new trip
                                </Button>
                            </ReactLink>

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
    );

}

export default DriverProfile;