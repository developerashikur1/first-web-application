import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';


const customersAll = [
    {name:'John Abraham', img:'https://i.ibb.co/hBqpR2x/image-34.jpg', address:'Gazipur, Dhaka, Bangladesh', email:'professional1234@gmail.com', }
]

const Customers = () => {
    return (
        <>
            <Box>
                <Container>
                <Grid container spacing={2}>
                    {customersAll.map(customer=><Grid key={customer?.email} item xs={12} md={3}>
                        <Paper style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', padding:'2rem'}}>
                        <img style={{width:'5rem'}} src={customer?.img} alt=""/>
                        <Typography fontWeight={600} sx={{fontSize:22, mt:3}} variant="h4" gutterBottom component="div">
                            {customer?.name}
                        </Typography>
                        <Typography fontWeight={400} sx={{fontSize:14}} variant="h6" gutterBottom component="div">
                            {customer?.email}
                        </Typography>
                        </Paper>
                    </Grid>)}
                </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Customers;