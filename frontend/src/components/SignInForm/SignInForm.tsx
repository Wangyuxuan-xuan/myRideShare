import * as React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "./SignInForm.css"
import {LoginInService} from "../../service/LoginInService";
import {Link as ReactLink,Navigate,useNavigate  } from "react-router-dom";
import {from} from "rxjs";
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

interface SignInFormProps{
    loginService : LoginInService,
    changeDriverLogInState : any
    changeCustomerLogInState : any,
    setCurrentCustomer : any
    setCurrentDriver : any
}

function SignInForm({loginService ,changeDriverLogInState ,changeCustomerLogInState, setCurrentCustomer , setCurrentDriver} : SignInFormProps){

    const {loginStore} = loginService;
    console.log("store : "+loginStore.isDriverLoggedIn);
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs" className="sign-in-form">
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
                        Sign in
                    </Typography>
                    <Box component="form" sx={{ mt: 1 }}>
                        <TextField
                            onChange={(e) => {
                                loginStore.email = e.target.value;
                            }}
                            margin="normal"
                            variant="outlined"
                            color="primary"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={(e) => {
                                loginStore.password = e.target.value;
                            }}
                            margin="normal"
                            variant="outlined"
                            color="primary"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        {/*<FormControlLabel*/}
                        {/*    control={<Checkbox value="remember" color="primary" />}*/}
                        {/*    label="Remember me"*/}
                        {/*/>*/}
                        <Grid container spacing={2}>
                            <Grid item xs = {12} sm = {6}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    color="secondary"
                                    variant="outlined"
                                    onClick={async (e) => {
                                        e.preventDefault();
                                        console.log("email :" + loginStore.email + "password : " + loginStore.password);
                                        const res = await loginService.loginAsCustomer();
                                        if (res){
                                            changeCustomerLogInState(true);
                                            setCurrentCustomer(loginStore.currentCustomerDTO);
                                            navigate("/");
                                        }else {
                                            changeCustomerLogInState(false);
                                        }
                                    }}
                                >
                                    Customer Sign in
                                </Button>
                            </Grid>
                            <Grid item xs = {12} sm = {6}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        color="primary"
                                        variant="outlined"
                                        onClick={async (e) => {
                                            e.preventDefault();
                                            console.log("email :" + loginStore.email + "password : " + loginStore.password);
                                            const res = await loginService.loginAsDriver();
                                            if (res){
                                                changeDriverLogInState(true);
                                                setCurrentDriver(loginStore.currentDriverDTO);
                                                navigate("/");
                                            }else {
                                                changeDriverLogInState(false);
                                            }
                                        }}
                                    >
                                        Driver Sign in
                                    </Button>
                            </Grid>
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

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>


    )
}

export default SignInForm;