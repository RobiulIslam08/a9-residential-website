import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async';

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
      <RouterProvider router={router} />
     
    </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>,
)
