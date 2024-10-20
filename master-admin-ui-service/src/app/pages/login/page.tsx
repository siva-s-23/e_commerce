import React from 'react'
import GoogleLoginPage from '@/app/components/singleUse/GoogleLoginPage';

const loginPage = () => {
    console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID, "HERE")
    return (
        <GoogleLoginPage />
    )
}

export default loginPage