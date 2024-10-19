'use client'

import React from 'react'
import {
    Box,
    Container,
    Typography,
    Button,
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const theme = createTheme({
    palette: {
        primary: {
            main: '#3f51b5',
        },
        background: {
            default: '#f5f5f5',
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
})

export default function NotFound() {
    const router = useRouter()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'background.default',
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="h1" align="center" color="primary" gutterBottom>
                        404
                    </Typography>
                    <Typography variant="h4" align="center" gutterBottom>
                        Oops! Page Not Found
                    </Typography>
                    <Box
                        sx={{
                            my: 4,
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            height: '300px',
                            width: '100%',
                        }}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Confused dog with laptop"
                            layout="fill"
                            objectFit="contain"
                        />
                    </Box>
                    <Typography variant="body1" align="center" paragraph>
                        Looks like our cat ate this page! Don&apos;t worry, he&apos;s just as confused as you are.
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            onClick={() => router.push('/')}
                        >
                            Go Back Home
                        </Button>
                    </Box>
                </Container>
            </Box>
        </ThemeProvider>
    )
}