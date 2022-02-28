import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MainDashboard from './MainDashboard/MainDashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Link, Outlet } from 'react-router-dom';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Accordion, AccordionDetails, AccordionSummary, Button, Collapse, Grid, ListItemButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import { makeStyles } from '@mui/styles';
import { StarBorder } from '@mui/icons-material';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



  // material styles
  const useStyles = makeStyles({
    paperHover:{
      transition:'ease-out .6s',
      // {
    //     transitionProperty: 'all',
    // transitionDuration: '0.4s',
    // transitionTimingFunction: 'linear',
    // transitionDelay: '0s'
      // },
      "&:hover":{
        transition:'ease-out .6s',
        // {
      //     transitionProperty: 'all',
      // transitionDuration: '0.4s',
      // transitionTimingFunction: 'linear',
      // transitionDelay: '0s'
      //   },
      }
    }
  });

const AdminDashboard = () => {
  
  const {paperHover} = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  // const boxRef = useRef()

  const handleToggle = (e) =>{
    e.preventDefault();
    setToggle(!toggle)
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onHoverHandle = (e) =>{
    e.preventDefault();
    // if(e.)
    if(e.bubbles === true){
      setOpen(true);
    }
    else{
      setOpen(false);
    }
  }
  
  const handleMouseOut = (e) =>{
    e.preventDefault();

      if(e.bubbles === true){
        setOpen(false);
      }
      else{
        setOpen(true);
      }
  }

    return (
        <>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Grid container spacing={0}>
              <Grid item xs={4}>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
              </Grid>
              <Grid item xs={4}>

              </Grid>
              <Grid item xs={4}>
                <SettingsIcon/>
              </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer className={paperHover} style={{zIndex:'50'}} onMouseOver={onHoverHandle} onMouseOut={handleMouseOut} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <Link onMouseOver={onHoverHandle} style={{textDecoration:'none'}} to="/">
              <ListItem button>
                  <ListItemIcon>
                        <MailIcon />
                  </ListItemIcon>
                <ListItemText>
                      Dashboard
                </ListItemText>
              </ListItem>
            </Link>
        </List>
        <Divider />
        <List>
            <Link style={{textDecoration:'none', color:'grey'}} to="customers">
              <ListItem button>
                  <ListItemIcon>
                        <PeopleAltIcon />
                  </ListItemIcon>
                <ListItemText>
                    Customers
                </ListItemText>
              </ListItem>
            </Link>



              {/* e-commerce button shortlist */}
            <Link style={{textDecoration:'none', color:'grey'}} onClick={handleToggle} to="">
              <ListItem button>
                  <ListItemIcon>
                        <ShoppingCartOutlinedIcon />
                  </ListItemIcon>
                <ListItemText>
                    Ecommerce
                </ListItemText>
              </ListItem>
            </Link>

            {/* sub menu of e-commerce button */}
            <Box sx={{display:`${toggle ? 'block' : 'none'}`, pl:7/1}}>
            <Link style={{textDecoration:'none', color:'grey'}} to="products">
              <ListItem button>
                <ListItemText>
                   Products
                </ListItemText>
              </ListItem>
            </Link>
            <Link style={{textDecoration:'none', color:'grey'}} to="productsCart">
            <ListItem button>
               <ListItemText>
                   Products Cart
               </ListItemText>
            </ListItem>
            </Link>
            <Link style={{textDecoration:'none', color:'grey'}} to="productsEdit">
            <ListItem button>
               <ListItemText>
                   Products Edit
               </ListItemText>
            </ListItem>
            </Link>
            <Link style={{textDecoration:'none', color:'grey'}} to="productsDetails">
            <ListItem button>
               <ListItemText>
                   Products Details
               </ListItemText>
            </ListItem>
            </Link>
            <Link style={{textDecoration:'none', color:'grey'}} to="ProductsOrders">
            <ListItem button>
               <ListItemText>
                   Products Orders
               </ListItemText>
            </ListItem>
            </Link>
            <Link style={{textDecoration:'none', color:'grey'}} to="productsCheckout">
            <ListItem button>
               <ListItemText>
                   Products Checkout
               </ListItemText>
            </ListItem>
            </Link> 
            </Box>

            {/* <Collapse in={toggle} timeout="auto" unmountOnExit>
              <List sx={{pl:7/1}} component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <Link style={{textDecoration:'none', color:'grey'}} to="products">
                    <ListItem button>
                      <ListItemText>
                        Products
                      </ListItemText>
                    </ListItem>
                  </Link>
                  <Link style={{textDecoration:'none', color:'grey'}} to="productsCart">
                  <ListItem button>
                    <ListItemText>
                        Products Cart
                    </ListItemText>
                  </ListItem>
                  </Link>
                  <Link style={{textDecoration:'none', color:'grey'}} to="productsEdit">
                  <ListItem button>
                    <ListItemText>
                        Products Edit
                    </ListItemText>
                  </ListItem>
                  </Link>
                  <Link style={{textDecoration:'none', color:'grey'}} to="productsDetails">
                  <ListItem button>
                    <ListItemText>
                        Products Details
                    </ListItemText>
                  </ListItem>
                  </Link>
                  <Link style={{textDecoration:'none', color:'grey'}} to="ProductsOrders">
                  <ListItem button>
                    <ListItemText>
                        Products Orders
                    </ListItemText>
                  </ListItem>
                  </Link>
                  <Link style={{textDecoration:'none', color:'grey'}} to="productsCheckout">
                  <ListItem button>
                    <ListItemText>
                        Products Checkout
                    </ListItemText>
                  </ListItem>
                  </Link>
                </ListItemButton>
              </List>
            </Collapse> */}






            <Divider sx={{display:`${toggle ? 'block' : 'none'}`}}/>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
            <Box>
                <MainDashboard></MainDashboard>
                <Outlet/>
            </Box>
      </Box>
      

      {/* right drawer */}


    </Box>   
        </>
    );
};

export default AdminDashboard;


