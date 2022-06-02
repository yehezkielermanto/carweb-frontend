import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { GoogleOAuthProvider } from '@react-oauth/google'

import store from './redux/store'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import Homepage from './pages/Homepage' // Homepage
import Cars from './pages/Cars' // Search Car
import Login from './pages/Login' // Login
import Register from './pages/Register' // Register
import NotFound from './pages/404'

import Protected from './components/Protected'

import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/cars"
          element={
            <Protected>
              <Cars />
            </Protected>
          }
        />
        <Route
          path="/login"
          element={
            <GoogleOAuthProvider clientId="991015068005-j36ajv7n18pogrbk11eob4noo5t1uo1o.apps.googleusercontent.com">
              <Login />
            </GoogleOAuthProvider>
          }
        />
        <Route
          path="/register"
          element={
            <GoogleOAuthProvider clientId="991015068005-j36ajv7n18pogrbk11eob4noo5t1uo1o.apps.googleusercontent.com">
              <Register />
            </GoogleOAuthProvider>
          }
        />
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
