'use client'
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import GoogleLoginPage from './components/singleUse/GoogleLoginPage';
import Dashboard from './components/Dashboard';

const HomePage = () => {

    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated,
    );

    if (!isAuthenticated) {
        return <><GoogleLoginPage /> </>
    }

    return <><Dashboard /></>;
};

export default HomePage;
