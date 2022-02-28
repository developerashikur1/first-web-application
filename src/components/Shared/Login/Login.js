import React from 'react';
import { useForm } from "react-hook-form";
import {Box, Button, Divider, Grid, Typography,} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Contexts/useAuth';

const Login = () => {
    const {googleSignInMethod, signInUsingUserPassword} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    
    // react hook form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        signInUsingUserPassword(data.email, data.password, location, navigate);
        reset();
    };
    
    const handleGoogleButton = (e) =>{
        e.preventDefault();
        googleSignInMethod(location, navigate);
    }
    return (
        <>
         <Box>
            <Grid container spacing={0}>
                <Grid item xs={0} md={4}>
                    
                </Grid>
                <Grid sx={{p:3}} item xs={12} md={4}>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant="h6" gutterBottom component="div">
                    Hi, Welcome Back
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                    Enter your credentials to continue
                    </Typography>
                </Box>
                <br/><br/>

                    <Button onClick={handleGoogleButton} style={{width:'100%', height:'3rem'}} variant="outlined" color="success">
                        <GoogleIcon/> &nbsp; Google Sign In
                    </Button>
                    <Divider sx={{my:6}} />
                    <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Your Email' {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }})} 
                        />
                        <input placeholder='Password' type="password" {...register("password")} />
                    <Box sx={{textAlign:'right'}}>
                        <Link to="/resetPassword" style={{textDecoration:'none'}}>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Forgot Password?
                            </Typography>
                        </Link>
                    </Box>
                        <Button type="submit">Login</Button>
                    </form>
                    <br/>
                    <Box sx={{textAlign:'center'}}>
                        <Link to="/register" style={{textDecoration:'none'}}>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Don't Have an account?
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={0} md={4}>

                </Grid>
            </Grid>
         </Box>   
        </>
    );
};

export default Login;

