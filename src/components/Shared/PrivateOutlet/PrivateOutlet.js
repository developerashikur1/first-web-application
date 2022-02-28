import React from 'react';

import { Outlet, Navigate, useLocation } from 'react-router-dom'
import { LinearProgress } from '@mui/material';
import useAuth from '../Contexts/useAuth';

const PrivateOutlet = () => {
    const location = useLocation();
    const {user, loading} = useAuth();
    if(loading){
        return <LinearProgress color="secondary" />
    }
    else{
        return user?.email ? <Outlet/> : <Navigate to='/login' state={{from: location}}/>;
    }
};

export default PrivateOutlet;