'use client';

import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
    useTheme,
} from '@mui/material';
import {
    Facebook,
    Twitter,
    Instagram,
    YouTube,
    Phone,
    Email,
    LocationOn,
} from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store/store';

const Footer = () => {
    const theme = useTheme();

    const isAuthenticated = useSelector(
        (state: RootState) => state.user.isAuthenticated,
    );

    const footerSections = [
        {
            title: 'Shop',
            links: [
                { label: 'New Arrivals', href: '/new-arrivals' },
                { label: 'Best Sellers', href: '/best-sellers' },
                { label: 'Sale', href: '/sale' },
                { label: 'Gift Cards', href: '/gift-cards' },
            ],
        },
        {
            title: 'Customer Service',
            links: [
                { label: 'Contact Us', href: '/contact' },
                { label: 'Shipping & Returns', href: '/shipping-returns' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Size Guide', href: '/size-guide' },
            ],
        },
        {
            title: 'About Us',
            links: [
                { label: 'Our Story', href: '/our-story' },
                { label: 'Careers', href: '/careers' },
                { label: 'Press', href: '/press' },
                { label: 'Sustainability', href: '/sustainability' },
            ],
        },
    ];

    if (!isAuthenticated) {
        return <></>;
    }

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.secondary,
                py: 6,
                borderTop: `1px solid ${theme.palette.divider}`,
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-evenly">
                    {footerSections.map((section) => (
                        <Grid item xs={12} sm={4} key={section.title}>
                            <Typography variant="h6" color="text.primary" gutterBottom>
                                {section.title}
                            </Typography>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link href={link.href} color="inherit" underline="hover">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                    <Grid item xs={12} sm={4}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            Support
                        </Typography>
                        <Typography variant="body2" component="p">
                            <Phone fontSize="small" /> +1 (800) 123-4567
                        </Typography>
                        <Typography variant="body2" component="p">
                            <Email fontSize="small" /> support@eshop.com
                        </Typography>
                        <Typography variant="body2" component="p">
                            <LocationOn fontSize="small" /> 123 E-commerce St, Online City,
                            12345
                        </Typography>
                    </Grid>
                </Grid>
                <Box mt={5}>
                    <Divider />
                    <Box
                        mt={3}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Typography variant="body2">
                            © {new Date().getFullYear()} E-Shop. All rights reserved.
                        </Typography>
                        <Box>
                            <IconButton color="inherit" aria-label="Facebook">
                                <Facebook />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Twitter">
                                <Twitter />
                            </IconButton>
                            <IconButton color="inherit" aria-label="Instagram">
                                <Instagram />
                            </IconButton>
                            <IconButton color="inherit" aria-label="YouTube">
                                <YouTube />
                            </IconButton>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
