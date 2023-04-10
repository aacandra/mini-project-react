import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login'
import Account from './components/Account'

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
      <NavigationBar/>
      <Outlet/>
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
      path: "/",  
      element: <App/>,
      },
      {
        path: "/login",
        element: 
        <Login/>
        
        },

        {
          path: "/account",
          element: 
          <Account/>,
          }

      ],
  },
  {
    path: "/account",
    element: 
    <Account/>,
    }

    
    

    
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)