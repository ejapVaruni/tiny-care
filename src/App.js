import React, { Component, Suspense } from 'react'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Dashboard = React.lazy(() => import('./views/pages/dashboard/Dashboard'))
const Dashboard2 = React.lazy(() => import('./views/pages/dashboard2/Dashboard2'))

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route path="/" name="Login Page" element={<Login />} />
            <Route exact path="/dashboard" name="Dashboard" element={<Dashboard />} />
            <Route exact path="/dashboard2" name="Dashboard2" element={<Dashboard2 />} />
            <Route exact path="/login" name="Login" element={<Login />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    )
  }
}

export default App
