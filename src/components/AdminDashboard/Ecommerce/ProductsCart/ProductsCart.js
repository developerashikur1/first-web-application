import React, { useState } from 'react';
import { Box, Button, ButtonGroup, Container, Divider, Grid, IconButton, InputLabel, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { blueGrey, green, grey, pink } from '@mui/material/colors';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const useStyles = makeStyles({
    pageHover:{
        "&:hover":{

        }
    }
});


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

  const cartProducts = [
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},
    {title:"Rounded Chair", description:"but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look", img:"https://i.ibb.co/B6PndZT/product-24.jpg", price:153},

];
  

const ProductsCart = () => {
    const [totalNumber, setTotalNumber] = useState(1);
    const [totalPrice, setTotalPrice] = useState(null);

    const handleProductNumber = (e) =>{
        e.preventDefault();
        setTotalNumber(e.target.value)
        // setTotalNumber(parseInt(e.target.value));
    }

    const handleAddProducts = (e) =>{
        e.preventDefault();
        if(totalNumber < 10){
            const total = totalNumber + 1;
            setTotalNumber(total)
        }
        else{
            return
        }
    };

    const handleRemoveProducts = (e) =>{
        e.preventDefault();
        if(totalNumber > 0){
            setTotalNumber(totalNumber - 1)
        }
        else{
            return;
        }
    }
    console.log(totalNumber)
    return (
        <>
            <Box>
                <Container>
                    <Grid container spacing={2}>
                    {/* Products Cart Section */}
                        <Grid item sx={{px:3}} xs={12} md={9}>
                            <Paper  sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer component={Paper}>
                                    <Table aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Image</TableCell>
                                            <TableCell align="left">Product Info</TableCell>
                                            <TableCell align="center">Price</TableCell>
                                            <TableCell align="center">Quantity</TableCell>
                                            <TableCell align="center">Total</TableCell>
                                            <TableCell align="center">Action</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {cartProducts.map((row, index) => (
                                            <TableRow 
                                            sx={{ transition:'ease-out .6s', "&:hover":{boxShadow:3, transform:'scale(1.05)', transition:'ease-in .2s' }}}
                                            key={`rows-${index}`}
                                            // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                            <TableCell sx={{width:'10%'}}>
                                                <img style={{width:'125px'}} src={row?.img} alt="" />
                                            </TableCell>
                                            <TableCell align="left">
                                                <Box sx={{display:'flex', flexDirection:'column'}}>
                                                {row?.title}
                                                &nbsp;
                                                {row?.description}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">{row?.price}</TableCell>
                                            <TableCell align="center">
                                                <Box sx={{display:'flex', flexDirection:'row', alignItems:'center' }}>
                                                    <IconButton onClick={handleRemoveProducts} size="small" aria-label="delete">
                                                        <RemoveIcon />
                                                    </IconButton>
                                                    <TextField size='small' sx={{width:'50%', height:'50%'}} type='number' onChange={handleProductNumber}  value={totalNumber} InputLabelProps={{ shrink: true }} />
                                                    <IconButton onClick={handleAddProducts} size="small" aria-label="delete">
                                                        <AddIcon />
                                                    </IconButton>
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">{row?.price}</TableCell>
                                            <TableCell align="center">
                                                <IconButton size="small" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        </Grid>

                        {/* Products Summery Section */}
                        <Grid sx={{px:3}} item xs={12} md={3}>
                        {/* cart paper */}
                            <Paper sx={{p:3, mb:6, transition:'ease-out .6s', "&:hover":{boxShadow:3, transform:'scale(1.1)', transition:'ease-in .2s' }}}>
                                <Typography sx={{color:blueGrey[600]}} variant="h6" gutterBottom component="div">
                                CART SUMMARY
                                </Typography>
                                <Divider sx={{my:1}}/>
                                <Typography sx={{color:blueGrey[600]}} variant="caption" display="block" gutterBottom>
                                    Total Price
                                </Typography>
                                <Typography sx={{color:blueGrey[600]}} fontWeight={800} variant="h4" display="block" gutterBottom>
                                    {80} dynamic
                                </Typography>
                                <Divider sx={{my:1}}/>
                                <ButtonGroup disableElevation variant="contained">
                                    <Button sx={{mr:1}} color="success">Checkout</Button>
                                    <Button sx={{bgcolor:blueGrey[600], transition:'ease-out .3s', "&:hover":{bgcolor:pink[400]}}}>Cancel</Button>
                                </ButtonGroup>
                            </Paper>

                            {/* support paper */}
                            <Paper sx={{p:3, transition:'ease-out .6s', "&:hover":{boxShadow:3, transform:'scale(1.1)', transition:'ease-in .2s' }}}>
                                <Typography sx={{color:blueGrey[600]}} variant="h6" gutterBottom component="div">
                                For Any Support
                                </Typography>
                                <Divider sx={{my:1}}/>
                                <Typography sx={{color:blueGrey[600], display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'start'}} variant="h6" gutterBottom component="div">
                                <CallIcon/> &nbsp; 01739-777302
                                </Typography>
                                <Typography sx={{color:blueGrey[600]}} variant="caption" display="block" gutterBottom>
                                Please contact with us if you have any questions. We are avalible 24h.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>   
        </>
    );
};

export default ProductsCart;