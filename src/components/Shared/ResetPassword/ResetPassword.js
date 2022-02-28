import React from 'react';
import { useForm } from "react-hook-form";
import {Box, Button, Divider, Grid, Typography,} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';
import './ResetPassword.css';

const ResetPassword = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <>
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={0} md={4}>
                    
                </Grid>
                <Grid sx={{p:3}} item xs={12} md={4}>
                <Box sx={{textAlign:'center'}}>
                    <Typography variant="h6" gutterBottom component="div">
                    Forgot password?
                    </Typography>
                    <Typography variant="subtitle1" gutterBottom component="div">
                    Enter your email address below and we'll send you password reset OTP.
                    </Typography>
                </Box>
                <br/><br/>
                    <form className='resetForm' onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Your Email' {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }})} 
                        />
                        <Button type="submit">Register</Button>
                    </form>
                    <br/>
                    <Box sx={{textAlign:'center'}}>
                        <Link to="/login" style={{textDecoration:'none'}}>
                            <Typography variant="subtitle1" gutterBottom component="div">
                                Already Have an account?
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

export default ResetPassword;