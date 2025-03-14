// import { StrictMode } from 'react'
import * as React from "react";

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/",
    element: <Home></Home>,
    
    children:[
      {

      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
    
  
)
