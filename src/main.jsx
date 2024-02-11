import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Auth from './layouts/Auth';
import Dashboard from './layouts/Dashboard';
import UserManagement from './views/UserManagement';
// import Login from './components/layouts/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/usermanagement",
    element: <UserManagement />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
