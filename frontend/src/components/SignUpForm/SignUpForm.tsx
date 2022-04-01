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
import {SignUpService} from "../../service/SignUpService";
import {useState} from "react";
import "./SignUpForm.css";

interface SignUpFormProps {
    signUpService : SignUpService
}
function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Rideshare
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function SignUpForm({signUpService} : SignUpFormProps) {

    const {signUpStore} = signUpService;

    const [nameError , setNameError] = useState(false);
    const [emailError , setEmailError] = useState(false);
    const [phoneError , setPhoneError] = useState(false);
    const [passwordError , setPasswordError] = useState(false);
    const [rePasswordError , setRePasswordError] = useState(false);

    const isSyntaxOk = () => {
        if(signUpStore.name === ""){
            setNameError(true);
        }else setNameError(false);

        if(signUpStore.email === ""){
            setEmailError(true);
        }else setEmailError(false);

        if(signUpStore.phoneNumber === ""){
            setPhoneError(true);
        }else setPhoneError(false);

        if(signUpStore.password === ""){
            setPasswordError(true);
        }else setPasswordError(false);

        if(signUpStore.rePassword === ""){
            setRePasswordError(true);
        }else setRePasswordError(false);

        if(signUpStore.password !== signUpStore.rePassword){
            setRePasswordError(true);
        }else setRePasswordError(false);


        return !(nameError || emailError || phoneError || passwordError || rePasswordError);
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className="sign-up-form-container">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        signUpStore.name = e.target.value;
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Name"
                                    autoFocus
                                    error={nameError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        signUpStore.email = e.target.value;
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={emailError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        signUpStore.phoneNumber = e.target.value;
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    id="phone-number"
                                    label="Phone Number"
                                    name="lastName"
                                    autoComplete="phone-number"
                                    error={phoneError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        signUpStore.password = e.target.value;
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    error={passwordError}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => {
                                        signUpStore.rePassword = e.target.value;
                                    }}
                                    variant="outlined"
                                    color="primary"
                                    required
                                    fullWidth
                                    name="password"
                                    label="RePassword"
                                    type="password"
                                    id="re-password"
                                    autoComplete="new-password"
                                    error={rePasswordError}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        if (isSyntaxOk()){
                                            signUpService.signUpAsCustomer();
                                        }
                                    }}
                                >
                                    Customer Sign up
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="primary"
                                    variant="outlined"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        if (isSyntaxOk()){
                                            signUpService.signUpAsDriver();
                                        }
                                    }}
                                >
                                    Driver Sign up
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}