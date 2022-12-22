import classes from "./AuthForms.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

function Register() {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className={classes.bodyDiv}>
                <h1>CREATE AN ACCOUNT</h1>
                <form>
                    <Box
                        component={Paper}
                        sx={{
                            '& > :not(style)': {m: 3},
                        }}
                        noValidate
                        textAlign='center'
                        autoComplete="off"
                    >

                        <TextField
                            id="standard-basic-first-name"
                            label="First Name"
                            sx={{m: 1, width: "25ch"}}
                            name="firstName"
                            required
                            variant="standard"/><br/>

                        <TextField
                            id="standard-basic-last-name"
                            label="Last Name"
                            sx={{m: 1, width: "25ch"}}
                            name="lastName"
                            required
                            variant="standard"/><br/>

                        <TextField
                            id="standard-basic-email"
                            label="Email"
                            sx={{m: 1, width: "25ch"}}
                            name="email"
                            required
                            variant="standard"/><br/>

                        <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl><br/>

                        <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                            <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                            <Input
                                id="standard-adornment-password"
                                name="confirmPassword"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl><br/>

                        <Button type="submit" variant="contained" href="/login" style={{backgroundColor: 'black'}}>
                            Sign Up
                        </Button>

                        <p>You are a member?</p>
                        <Button type="button" variant="contained" href="/login" style={{backgroundColor: 'black'}}>
                            Log In
                        </Button>
                    </Box>
                </form>
        </div>
    );
}

export default Register;
