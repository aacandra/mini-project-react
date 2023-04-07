// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <React.StrictMode>
//     <App />
//   // </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Login from './components/Login'

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
        }
        
      ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)