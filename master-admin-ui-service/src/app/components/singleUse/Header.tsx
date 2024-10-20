'use client';

import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Badge,
    Menu,
    MenuItem,
    useMediaQuery,
    useTheme,
    Tooltip,
} from '@mui/material';
import {
    ShoppingCart as ShoppingCartIcon,
    Person as PersonIcon,
    Menu as MenuIcon,
    Logout as LogoutIcon
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { clearUser } from '@/app/store/slices/userSlice';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    // Get user data and authentication state from Redux
    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated,
    );
    const userName = useSelector((state: RootState) => state.user.name);
    const router = useRouter();
    const dispatch = useDispatch();


    // Handle menu actions
    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    // Define menu items
    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Categories', href: '/categories' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    const handleLogout = () => {
        sessionStorage.clear()
        dispatch(clearUser());      // Dispatch the logout action to update Redux state
        router.push('/pages/login');
    }

    // If not authenticated, return empty fragment
    if (!isAuthenticated) {
        return <></>;
    }

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button color="inherit">E-Shop</Button>
                </Typography>

                {isMobile ? (
                    <>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            {menuItems.map((item) => (
                                <MenuItem key={item.label} onClick={handleMenuClose}>
                                    <Button color="inherit">{item.label}</Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    menuItems.map((item) => (
                        <Button key={item?.label} color="inherit">{item.label}</Button>
                    ))
                )}

                {/* Tooltip to display user name when hovering over the person icon */}
                <Tooltip title={userName || "User"} arrow>
                    <IconButton color="inherit" aria-label="account">
                        <Badge badgeContent={1} color="primary">
                            <PersonIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>

                <IconButton color="inherit" aria-label="cart">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" aria-label="cart" onClick={handleLogout}>
                    <LogoutIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
