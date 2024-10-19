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
} from '@mui/material';
import {
    ShoppingCart as ShoppingCartIcon,
    Person as PersonIcon,
    Menu as MenuIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated,
    );

    const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'Products', href: '/products' },
        { label: 'Categories', href: '/categories' },
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
    ];

    if (!isAuthenticated) {
        return <></>;
    }

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link href="/" passHref>
                        <Button color="inherit">E-Shop</Button>
                    </Link>
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
                                    <Link href={item.href} passHref>
                                        <Button color="inherit">{item.label}</Button>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                ) : (
                    menuItems.map((item) => (
                        <Link key={item.label} href={item.href} passHref>
                            <Button color="inherit">{item.label}</Button>
                        </Link>
                    ))
                )}

                <IconButton color="inherit" aria-label="account">
                    <PersonIcon />
                </IconButton>
                <IconButton color="inherit" aria-label="cart">
                    <Badge badgeContent={4} color="error">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
