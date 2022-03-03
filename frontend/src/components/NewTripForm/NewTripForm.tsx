import * as React from 'react';
import "./NewTripForm.css"
import Box from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {ChangeEvent, useState} from "react";

const useStyles = makeStyles({
    field : {
        marginTop : 10,
        marginBottom : 10,



    }
})

function NewTripForm() {

    const classes = useStyles();
    const [string1Error,setString1Error] = useState(false)

    let string1 = "";

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();

        if(string1 === ""){
            setString1Error(true);
        }else {
            setString1Error(false);
        }

        if(string1){
            console.log(string1);
        }
    }

    return (
        <div className= "new-trip-form">

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <div className="input-columns">
                    <ul>
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}

                        />
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />

                        <TextField
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />
                        <TextField
                            className={classes.field}
                            label= "description"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            // multiline
                            // rows={4}
                            error={string1Error}
                        />
                    </ul>
                    <ul>
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}

                        />
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />

                        <TextField
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />
                        <TextField
                            className={classes.field}
                            label= "description"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            // multiline
                            // rows={4}
                            error={string1Error}
                        />
                    </ul>
                    <ul>
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}

                        />
                        <TextField
                            onChange={(e) => {
                                string1 = e.target.value;
                            }}
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />

                        <TextField
                            className={classes.field}
                            label= "note title"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            required
                            error={string1Error}
                        />
                        <TextField
                            className={classes.field}
                            label= "description"
                            variant="outlined"
                            color="primary"
                            // fullWidth="80%"
                            // multiline
                            // rows={4}
                            error={string1Error}
                        />
                    </ul>
                </div>

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