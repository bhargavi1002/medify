import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HomePage from './HomePage/HomePage';
import FindDoctors from './FindDoctors/FindDoctors';
import MyBookings from './MyBookings/MyBookings'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <FindDoctors />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
