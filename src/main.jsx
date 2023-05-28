import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx';
import Book from './components/Book/Book.jsx';
import About from './components/About/About.jsx';
import Layout from './components/Layout/Layout.jsx';
import Shop from './components/Shop/Shop.jsx';
import ProductDetails from './components/Shop/ProductDetails.jsx';


const router = createBrowserRouter([
{
  path:"/",
  element:<Layout></Layout>,
  children:[
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    },
    {
      path:"/book",
      element:<Book></Book>
    },
    {
      path:"/about",
      element:<About></About>
    },
    {
      path : "/shop",
      element: <Shop></Shop>
    },
    {
      path:"/details/:id",
      element:<ProductDetails></ProductDetails>
    }
  ]

}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
