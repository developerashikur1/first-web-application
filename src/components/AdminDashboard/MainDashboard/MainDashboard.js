import { Box,  Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useState, FunctionComponent, useEffect } from 'react';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  LabelList, Area, AreaChart, Brush, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { makeStyles } from '@mui/styles';


const  totalCounter = [
    {cost: 450, title:"Total Budget", subtitle:"", bgColor:"#C8FACD", color:"#005249",  grad1:"rgba(0, 123, 85, 0)", grad2:"rgba(0, 123, 85, 0.24)" },
    {cost: 350, title:"Total Progress", subtitle:"", bgColor:"#D0F2FF", color:"#0C53B7",  grad1:"rgba(12, 83, 183, 0)", grad2:"rgba(12, 83, 183, 0.24)" },
    {cost: 740, title:"Total Pending", subtitle:"", bgColor:"#FFF7CD", color:"#B78103",  grad1:"rgba(183, 129, 3, 0)", grad2:"rgba(183, 129, 3, 0.24)" },
    {cost: 840, title:"Total Profit", subtitle:"", bgColor:"#FFE7D9", color:"#B72136",  grad1:"rgba(183, 33, 54, 0)", grad2:"rgba(183, 33, 54, 0.24)" },
];

const data = [
    {
      "name": "Products A",
      "uv": 4000,
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Product B",
      "uv": 3000,
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Product C",
      "uv": 2000,
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Product D",
      "uv": 2780,
      "pv": 3908,
      "amt": 2000
    },
    {
      "name": "Product E",
      "uv": 1890,
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Product F",
      "uv": 2390,
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Product G",
      "uv": 3490,
      "pv": 4300,
      "amt": 2100
    }
  ];

  
  const pieData = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 500
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];

  const colors = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297', '#E2CF45', '#F8C12D'];
        
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
    {img:"https://i.ibb.co/HrRjh9w/gold1.png", title:"Dropbox", duration:3},
  ];


  // material styles
  const useStyles = makeStyles({
    paperHover:{
      transition:'ease-out .6s',
      "&:hover":{
        position: 'relative',
        transform: 'scale(1.07)',
        transition: 'ease .1s',
      }
    }
  });

const MainDashboard = () => {
const {paperHover} = useStyles();
    return (
        <>
            <Box sx={{py:2, my:3}}>
            <Grid container spacing={2}>
                {totalCounter.map(counter=><Grid key={counter?.cost} item xs={12} md={3}>
                    <Paper sx={{bgcolor:`${counter?.bgColor}`, display:'flex', flexDirection:'column', alignItems:'center', p:3, transition:'ease-out .6s', "&:hover":{boxShadow:3, transform:'scale(1.05)', transition:'ease-in .02s'}}} elevation={0} >
                    {/* `${}` */}
                            <span style={{ padding:'1rem', height:'4rem', width:'4rem', display:'flex', alignItems:'center', justifyContent:'center' ,borderRadius:'100%', backgroundImage : `linear-gradient(135deg, ${counter?.grad1} 0%, ${counter?.grad2} 100%)`}}>< LocalMallIcon sx={{ color:`${counter?.color}`, fontSize:21}} /> </span>
                            <Typography sx={{mt:3, color:`${counter?.color}`}} variant="h5" gutterBottom component="div">
                                ${counter?.cost}
                            </Typography>
                            <Typography sx={{color:`${counter?.color}`}} variant="body1" gutterBottom component="div">
                                {counter?.title}
                            </Typography>
                    </Paper>
                </Grid>)}
            </Grid>
            </Box>

            <Box>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={8}>
                            <Paper sx={{p:3, height:'25rem', width:'100%'}}>
                                <ResponsiveContainer height="100%" width="100%" >
                                    <AreaChart height="100%" width="100%" data={data}>
                                            <defs>
                                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                                </linearGradient>
                                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                                                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                                                </linearGradient>
                                            </defs>
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <Tooltip />
                                            {/* <Brush /> */}
                                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                                        </AreaChart>
                                    </ResponsiveContainer>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{p:3, height:'25rem', width:'100%'}}>
                            <ResponsiveContainer height="100%" width="100%" >
                                <PieChart height="100%" width="100%" >
                                    {/* <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} label> */}
                                    <Pie dataKey="value" data={pieData} cx="50%" cy="50%" label innerRadius={0} outerRadius={150} >
                                        {
                                            pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={colors[index]}/>
                                        ))
                                        }
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                                </ResponsiveContainer>
                            </Paper>
                        </Grid>
                    </Grid>
            </Box>


            {/* Updated Table */}
            <Box sx={{py:2, my:3}}>
                <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  {/* <Paper>
                    <Typography variant="h5" gutterBottom component="div">
                      Latest Products                    
                    </Typography>
                    <Box>

                    </Box>
                  </Paper> */}

                    <TableContainer component={Paper}>
                      <Table sx={{ width: '100%' }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Latest Products</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow
                              key={`row-${index}`}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                              <TableCell component="th" scope="row">
                                <img src={row?.img} style={{width:'25%'}} alt=""/>
                              </TableCell>
                              <TableCell align="left">{row?.title}</TableCell>
                              <TableCell align="right">Updated about {row?.duration} Hours</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                </Grid>


                {/* Table order */}
                <Grid item xs={12} md={8}>
                  <Paper>
                    <TableContainer component={Paper}>
                      <Table sx={{ width: '100%' }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Latest Orders</TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right"></TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="center">Customer</TableCell>
                            <TableCell align="center">Date</TableCell>
                            <TableCell align="center">Status</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row, index) => (
                            <TableRow
                              key={`rows-${index}`}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                            >
                              <TableCell component="th" scope="row">
                                <img src={row?.img} style={{width:'25%'}} alt=""/>
                              </TableCell>
                              <TableCell align="center">{row?.title}</TableCell>
                              <TableCell align="center">Updated about {row?.duration} Hours</TableCell>
                              <TableCell align="center">Updated about {row?.duration} Hours</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Paper>
                </Grid>
                </Grid>
            </Box>
        </>
    );
};
        
export default MainDashboard;
