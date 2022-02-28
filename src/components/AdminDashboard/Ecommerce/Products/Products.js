import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material';
import React from 'react';



const nikes = [
    {title:"Nike Space Hippie", img:"https://i.ibb.co/NZhPVMm/product-1.jpg", price:34.44, status:"new", ratings:345,},
    {title:"Nike Air Zoom Tempo NEXT%", price:45.4, img:"https://i.ibb.co/vmGZTnT/product-2.jpg", status:"hot", ratings:120,},
    {title:"Nike Air Zoom Tempo NEXT%", price:34.4, img:"https://i.ibb.co/YtgLrxT/product-3.jpg", status:"", ratings:241,},
    {title:"Nike Space Hippie 04", price:52.4, img:"https://i.ibb.co/3C2nsjv/product-4.jpg", status:"", ratings:241,},
    {title:"Nike Air Zoom Pegasus", price:45.5, img:"https://i.ibb.co/82ZR52c/product-5.jpg", status:"", ratings:241,},
    {title:"Chaz Bear", price:34.2, img:"https://i.ibb.co/71bPxgJ/product-6.jpg", status:"", ratings:241,},
    {title:"Nike Blazer lchown", price:54.1, img:"https://i.ibb.co/XS9fV4H/product-7.jpg", status:"", ratings:241,},
    {title:"Vintage", price:75.5, img:"https://i.ibb.co/8BCpzy6/product-8.jpg", status:"", ratings:241,},
    {title:"SALENike ZoomX SuperRep Surge", price:15.4, img:"https://i.ibb.co/cXGVxJP/product-9.jpg", status:"", ratings:320,},
    {title:"Nike ZoomX SuperRep Surge", price:94.2, img:"https://i.ibb.co/kB76Mk6/product-10.jpg", status:"", ratings:120,},
    {title:"NEWZoom Freak 2", price:45.5, img:"https://i.ibb.co/hyXZJDB/product-11.jpg", status:"", ratings:154,},
    {title:"Zoom Freak 2", price:36.4, img:"https://i.ibb.co/prg6Xmh/product-12.jpg", status:"", ratings:154,},
    {title:"SALENike Air Max Zephyr", price:41.2, img:"https://i.ibb.co/m92MB2b/product-13.jpg", status:"", ratings:154,},
    {title:"Nike Air Max Zephyr", price:70.1, img:"https://i.ibb.co/nw1Qk3V/product-14.jpg", status:"", ratings:154,},
    {title:"SALEJordan Delta", price:55.7, img:"https://i.ibb.co/fCkYd4F/product-15.jpg", status:"", ratings:154,},
    {title:"Jordan Delta", price:61.2, img:"https://i.ibb.co/kg4KCGf/product-16.jpg", status:"", ratings:154,},
    {title:"NEWAir Jordan XXXV PF", price:32.5, img:"https://i.ibb.co/jkCnPpF/product-17.jpg", status:"", ratings:315,},
    {title:"Nike Air Force", price:74.5, img:"https://i.ibb.co/hfTydTz/product-18.jpg", status:"", ratings:315,},
    {title:"Air Jordan XXXV PF", price:31.6, img:"https://i.ibb.co/2KfSd3m/product-19.jpg", status:"", ratings:315,},
    {title:"NEWNike Waffle Racer Crater", price:48.2, img:"https://i.ibb.co/ZWkxWSF/product-20.jpg", status:"", ratings:315,},
    {title:"Nike Waffle Racer Crater", price:46.3, img:"https://i.ibb.co/Rj3LvrN/product-21.jpg", status:"", ratings:315,},
    {title:"Kyrie 7 EP Sisterhood", price:27.1, img:"https://i.ibb.co/k16C9xK/product-22.jpg", status:"", ratings:142,},
    {title:"Kyrie 7 EP Sisterhood", price:39.4, img:"https://i.ibb.co/M2CZxgC/product-23.jpg", status:"", ratings:142,},
    {title:"Nike Air Force 1 Shadow SE", price:15.2, img:"https://i.ibb.co/B6PndZT/product-24.jpg", status:"", ratings:142,},
  ];
  
  
  

const Products = () => {

    // const [value, setValue] = useState(),

    return (
        <>
            <Box>
            <Container>
                <Grid container spacing={2}>
                    {nikes.map(nike => <Grid key={nike?.img} item xs={12} md={3}>
                        <Card sx={{ maxWidth: 325 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="340"
                                image={nike?.img}
                                alt="green iguana"
                                />
                                <CardContent>
                                <Typography fontWeight={900} sx={{fontSize:18}} gutterBottom variant="h5" component="div">
                                    {nike?.title}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions sx={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                            <Rating name="read-only" value={4} readOnly />
                                <Button style={{color:'black', fontSize:'20px', fontWeight:'800'}} size="small" color="primary">
                                ${nike?.price}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)}
                </Grid>
            </Container>
            </Box>
        </>
    );
};

export default Products;