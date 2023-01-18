import classes from "./AuthForms.module.css";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {Button, FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@mui/material";
import {LineAxisOutlined, Visibility, VisibilityOff} from "@mui/icons-material";
import {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'


function Register() {
    const baseURL = "http://localhost:8080";
    const [showPassword, setShowPassword] = useState(false);
    let navigate = useNavigate();

    const [formValues, setFormValues] = useState({
        firstName:'',
        lastName:'',
        email: '',
        password: '',
        confirmPassword: ''
    });

    async function register() {
        await axios.post(baseURL + "/client/register", formValues)
            .then(response => {
                toast('Successfully Registered!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    style:{"--toastify-color-progress-light": "#39c41a" }

                })
                console.log(response);
            })
            .finally(navigate("/login"));
    };


    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleSubmit(e) {
        e.preventDefault();

        if (validValues()) {
            register();
        } else {
            toast.error('Something went wrong, please try again!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                // style:{"--toastify-color-progress-light": "#39c41a" }
            });
        };
    };
    function validValues() {
        if (formValues.username.length <= 0 || formValues.password.length <= 0) {
            return false;
        };
        return true;
    };

    const handleChange = (e) => {
        e.persist();
        setFormValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };


    const [client, setClient] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword:''
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
            return true;
        }

        if (!client.firstName && !client.lastName) {
            setError({
                ...inputError,
                firstName: "Enter your first name.",
                lastName: "Enter your last name.",
            });
            return true;
        }
        if (!client.email && !client.password) {
            setError({
                ...inputError,
                email: "Enter valid email address.",
                password: "Password should not be empty.",
            });
            return true;

        }

        if (client.password !== client.confirmPassword) {
            console.log(client.password)
            console.log(client.confirmPassword)
            setError({
                ...inputError,
                confirmPassword: "Password and confirm password should match.",
            });
            return true;
        }

        if (!client.firstName) {
            setError({
                ...inputError,
                firstName: "Enter your first name."
            });
            return true;
        }

        if (!client.lastName) {
            setError({
                ...inputError,
                lastName: "Enter your last name."
            });
            return true;
        }

        if (!client.email) {
            setError({
                ...inputError,
                email: "Enter valid email address.",
            });
            return true;
        }

        if (!client.password) {
            setError({
                ...inputError,
                password: "Password should not be empty.",
            });
            return true;
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

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        validateInput(event);

        const newClient = {
            firstName: client.firstName,
            lastName: client.lastName,
            email: client.email,
            password: client.password,
            confirmPassword: client.confirmPassword
        };

        // async function register(){
            // await axios.post(baseURL+"/clinet/register",newClient,)
            //     .then(response => {
            //         console.log(response)
            //     })
            //     .finally(navigate('/login'))
        // }
        // fetch(`${baseURL}/client/register`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
            
        //     },
        //     body: JSON.stringify(newClient)
        // })
        //     .then((response) => {
        //         return response.text();
        //     })
        //     .then(() => {
        //         setClient(newClient);
        //     });

    }

    async function test(event){
        if(validValues() && validateInput(event)){
            handleFormSubmit(event)
            navigate('/login')
        }
        else
        {{
                toast.error('Something went wrong, please try again!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            };
        }
    }
   
    function validValues() {
        if (formValues.password.length <= 0 || 
            formValues.email.length <= 0 ||
            formValues.firstName.length <=0 ||
            formValues.lastName.length <=0 ||
            formValues.confirmPassword.length <= 0 ||
            formValues.password !== formValues.confirmPassword
            ) {
            return false;
        };
        return true;
    };

    return (
        <div className={classes.bodyDiv}>
            <h1>CREATE AN ACCOUNT</h1>
            <form onSubmit={handleSubmit}>
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
                        onChange={handleChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.firstName}</p>

                    <TextField
                    
                        id="standard-basic-last-name"
                        label="Last Name"
                        sx={{m: 1, width: "25ch"}}
                        name="lastName"
                        onChange={handleChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.lastName}</p>

                    <TextField
                        id="standard-basic-email"
                        label="Email"
                        sx={{m: 1, width: "25ch"}}
                        name="email"
                        onChange={handleChange}
                        variant="standard"/>
                    <p style={{color: 'red'}}>{error.email}</p>

                    <FormControl sx={{m: 1, width: '25ch'}} variant="standard">
                        <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                        <Input
                            id="standard-adornment-password"
                            name="password"
                            onChange={handleChange}
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
                            onChange={handleChange}
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
