'use client'
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store/store';
import Dashboard from './components/Dashboard';
import CircularProgress from '@mui/material/CircularProgress'; // Material UI Loader
import Box from '@mui/material/Box'; // For centering the loader
import { setUser } from './store/slices/userSlice';
import { useRouter } from 'next/navigation';


const HomePage = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true); // Track if sessionStorage check is done

    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated,
    );
    const router = useRouter()

    useEffect(() => {
        // Check if userData exists in sessionStorage
        const userData = sessionStorage.getItem('userData');
        if (userData) {
            // Parse the JSON string to an object
            const parsedUserData = JSON.parse(userData);
            // Dispatch setUser action to update the store
            dispatch(setUser(parsedUserData));
        }
        // After checking sessionStorage, set loading to false
        setLoading(false);
    }, [dispatch]);

    // Show Material UI CircularProgress loader while checking sessionStorage
    if (loading) {
        return (
            <Box
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
            >
                <CircularProgress />
            </Box>
        );
    }

    if (!isAuthenticated) {
        router.push("/pages/login")
        return <></>
    }

    return <Dashboard />;
};

export default HomePage;
