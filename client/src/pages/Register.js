import classes from "./AuthForms.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";

function Register() {
    const baseURL = "http://localhost:8080";
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const validateInput = (event) => {
        event.preventDefault();
        let inputError = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        if (!client.firstName && !client.lastName && !client.email && !client.password) {
            setError({
                ...inputError,
                firstName: "Enter your first name.",
                lastName: "Enter your last name.",
                email: "Enter valid email address.",
                password: "Password should not be empty.",
            });
            return;
        }

        if (!client.firstName && !client.lastName) {
            setError({
                ...inputError,
                firstName: "Enter your first name.",
                lastName: "Enter your last name.",
            });
            return;
        }
        if (!client.email && !client.password) {
            setError({
                ...inputError,
                email: "Enter valid email address.",
                password: "Password should not be empty.",
            });
            return;

        }

        if (client.confirmPassword !== client.password) {
            setError({
                ...inputError,
                confirmPassword: "Password and confirm password should match.",
            });
            return;
        }

        if (!client.firstName) {
            setError({
                ...inputError,
                firstName: "Enter your first name."
            });
            return;
        }

        if (!client.lastName) {
            setError({
                ...inputError,
                lastName: "Enter your last name."
            });
            return;
        }

        if (!client.email) {
            setError({
                ...inputError,
                email: "Enter valid email address.",
            });
            return;
        }

        if (!client.password) {
            setError({
                ...inputError,
                password: "Password should not be empty.",
            });
            return;
        }

        setError(inputError);
    }

    const handleFormChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;
        const newFormData = {...client};
        newFormData[fieldName] = fieldValue;
        setClient(newFormData);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        validateInput(event);

        const newClient = {
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            password: client.password
        };
        fetch(`${baseURL}/client/add-client`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true
            },
            body: JSON.stringify(newClient)
        })
            .then((response) => {
                return response.text();
            })
            .then(() => {
                setClient(newClient);
            });
    }

    return (
        <div className={classes.bodyDiv}>
            <h1>CREATE AN ACCOUNT</h1>
            <form onSubmit={handleFormSubmit}>
                <Box
                    component={Paper}
                    sx={{
                        '& > :not(style)': {m: 2},
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
                        onChange={handleFormChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.firstName}</p>

                    <TextField
                        id="standard-basic-last-name"
                        label="Last Name"
                        sx={{m: 1, width: "25ch"}}
                        name="lastName"
                        onChange={handleFormChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.lastName}</p>

                    <TextField
                        id="standard-basic-email"
                        label="Email"
                        sx={{m: 1, width: "25ch"}}
                        name="email"
                        onChange={handleFormChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.email}</p>

                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            name="password"
                            onChange={handleFormChange}
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
                    </FormControl>
                    <p style={{color: 'red'}}>{error.password}</p>

                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
                        <Input
                            id="standard-adornment-password-confirmation"
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
                    </FormControl>
                    <p style={{color: 'red'}}>{error.confirmPassword}</p>

                    <Button type="submit" variant="contained" style={{backgroundColor: 'black'}}>
                        Sign Up
                    </Button>

                    <p>You are a member?
                        <Button type="button" variant="contained" href="/login"
                                style={{backgroundColor: 'black'}}>
                            Log In
                        </Button>
                    </p><br/>
                </Box>
            </form>
        </div>
    );
}

export default Register;
