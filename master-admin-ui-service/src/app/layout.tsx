'use client';

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Header from './components/singleUse/Header';
import Footer from './components/singleUse/Footer';
import store from './store/store';

// Using the default theme without overriding
const theme = createTheme();

const Layout = ({ children }: { children: ReactNode }) => {
    // Access the authentication status from Redux

    return (
        <html lang="en">
            <body>
                <Provider store={store}>
                    <GoogleOAuthProvider
                        clientId={process.env.NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ?? ""}
                    >
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            <Header />
                            <main>{children}</main>
                            <Footer />
                        </ThemeProvider>
                    </GoogleOAuthProvider>
                </Provider>
            </body>
        </html>
    );
};

export default Layout;
