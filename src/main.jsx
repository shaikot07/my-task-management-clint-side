import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Route/Routes.jsx';
import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AuthProvider from './pages/AuthProvider/Authprovider.jsx';



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}>
      </RouterProvider>
    </QueryClientProvider>
    </AuthProvider>


  </React.StrictMode>,
)
