'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import {
    Box,
    Container,
    Typography,
    Paper,
    Link,
    ThemeProvider,
    createTheme,
    CssBaseline
} from '@mui/material'
import { setUser } from '@/app/store/slices/userSlice'

interface GoogleUserData {
    name: string
    email: string
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
        background: {
            default: '#f5f5f5',
        },
    },
})

export default function MaterialUIGoogleLoginPage() {
    const dispatch = useDispatch()

    const handleGoogleLoginSuccess = (credentialResponse: any) => {
        const decoded: GoogleUserData = jwtDecode(credentialResponse.credential)
        const userData = { name: decoded.name, email: decoded.email }

        // Store user data in session storage
        sessionStorage.setItem('userData', JSON.stringify(userData))

        // Update Redux store
        dispatch(setUser(userData))
    }

    const handleGoogleLoginError = () => {
        console.error('Google Login Failed')
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                    backgroundAttachment: 'fixed',
                }}
            >
                <Container maxWidth="sm">
                    <Paper
                        elevation={6}
                        sx={{
                            p: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            borderRadius: 2,
                            backdropFilter: 'blur(10px)',
                            backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        }}
                    >
                        <Typography component="h1" variant="h4" gutterBottom fontWeight="bold" color="primary">
                            Welcome Back
                        </Typography>
                        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 3 }}>
                            Sign in to access your account
                        </Typography>
                        <Box sx={{ mt: 2, mb: 3 }}>
                            <GoogleLogin
                                onSuccess={handleGoogleLoginSuccess}
                                onError={handleGoogleLoginError}
                                useOneTap
                            />
                        </Box>
                        <Typography variant="body2" color="text.secondary" align="center">
                            By signing in, you agree to our{' '}
                            <Link href="#" color="primary">
                                Terms of Service
                            </Link>{' '}
                            and{' '}
                            <Link href="#" color="primary">
                                Privacy Policy
                            </Link>
                            .
                        </Typography>
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    )
}