import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Pages/Root.jsx';
import Home from './Component/Pages/Home.jsx';
import Donation from './Component/Pages/Donation';
import Statistics from './Component/Pages/Statistics';
import CardDetails from './Component/Pages/CardDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
          path: '/',        
          element:<Home></Home>,
          loader:() => fetch('/data.json'),
        },
        {
          path: '/donation',        
          element:<Donation></Donation>,
          loader:() => fetch('/data.json'),
        },
        {
          path: '/statistics',        
          element:<Statistics></Statistics>,
        },
        {
          path: '/DataCard/:id',        
          element:<CardDetails></CardDetails>,
          loader:() => fetch('/data.json'),
        }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)



