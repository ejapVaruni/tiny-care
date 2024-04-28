import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import store from './store'
import { AuthProvider } from '@asgardeo/auth-react'

const config = {
  signInRedirectURL: 'http://localhost:3000/dashboard',
  signOutRedirectURL: 'http://localhost:3000/login',
  clientID: 'mPOxVHzOOiYzHOaaKiSmrabt5UQa',
  baseUrl: 'http://api.asgardeo.io/t/mindmatrix',
  scope: ['openid', 'profile'],
}

createRoot(document.getElementById('root')).render(
  <AuthProvider config={config}>
    <App />
  </AuthProvider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
