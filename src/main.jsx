import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './Router/Router.jsx'
import { RouterProvider } from 'react-router'
import AuthProvider from './Contexts/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
  <RouterProvider router={router} />
<ToastContainer position="top-center" autoClose={4000} /> 
  </AuthProvider>
  </StrictMode>,
)
