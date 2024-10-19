'use client'

import React from 'react'
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    ThemeProvider,
    CssBaseline,
    Icon
} from '@mui/material';
import {
    Devices,
    Book,
    Home,
    SportsFootball,
    Spa,
    CarRepair
} from '@mui/icons-material';

const categories = [
    { id: 1, name: 'Electronics', icon: <Devices fontSize="large" /> },
    { id: 3, name: 'Books', icon: <Book fontSize="large" /> },
    { id: 4, name: 'Home & Garden', icon: <Home fontSize="large" /> },
    { id: 5, name: 'Sports', icon: <SportsFootball fontSize="large" /> },
    { id: 7, name: 'Beauty', icon: <Spa fontSize="large" /> },
    { id: 8, name: 'Automotive', icon: <CarRepair fontSize="large" /> },
];

export default function Dashboard() {
    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    py: 4,
                    backgroundColor: 'background.default',
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
                        Product Categories
                    </Typography>
                    <Grid container spacing={4}>
                        {categories.map((category) => (
                            <Grid item key={category.id} xs={12} sm={6} md={4} lg={3}>
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: '0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
                                        },
                                        padding: 2, // Add some padding for the icon
                                    }}
                                >
                                    <Box sx={{ mb: 2 }}>
                                        {category.icon}
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {category.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    )
}
