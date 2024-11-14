import { GoogleOAuthProvider } from '@react-oauth/google'
import React from 'react'
import GoogleLoginComponent from './GoogleLoginComponent'

function Login() {
    return (
        <>
        <GoogleOAuthProvider className="google" clientId="997803052385-2rk9n6e4kh1b18nsvuo7pvi6pjsu492a.apps.googleusercontent.com">
      <div className="google-login-wrapper">
        <GoogleLoginComponent className="google-login" />
      </div>
    </GoogleOAuthProvider>
        </>
        
    )
}

export default Login
