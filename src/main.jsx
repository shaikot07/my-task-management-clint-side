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

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}>
          </RouterProvider>
        </QueryClientProvider>
      </AuthProvider>
    </DndProvider>
  </React.StrictMode>,
)
