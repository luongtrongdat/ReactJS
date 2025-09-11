import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EX01 from "./components/PTIT_CNTT4_IT104_SS27_EX01/EX01";
import Home from "./components/PTIT_CNTT4_IT104_SS27_EX01/Home";
import About from "./components/PTIT_CNTT4_IT104_SS27_EX01/About";
import Contact from "./components/PTIT_CNTT4_IT104_SS27_EX01/Contact";
import ProductList from "./components/PTIT_CNTT4_IT104_SS27_EX02+4/ProductList";
import ProductDetail from "./components/PTIT_CNTT4_IT104_SS27_EX02+4/ProductDetail";
import TaskList from "./components/PTIT_CNTT4_IT104_SS27_EX03/TaskList";
import TaskDetail from "./components/PTIT_CNTT4_IT104_SS27_EX03/TaskDetail";
import BlogLayout from "./components/PTIT_CNTT4_IT104_SS27_EX05/BlogLayout";
import EX06 from "./components/PTIT_CNTT4_IT104_SS27_EX06/EX06";
import Home1 from "./components/PTIT_CNTT4_IT104_SS27_EX06/Home1";
import Product from "./components/PTIT_CNTT4_IT104_SS27_EX06/Product";
import Detail from "./components/PTIT_CNTT4_IT104_SS27_EX06/Detail";
import Home2 from "./components/PTIT_CNTT4_IT104_SS27_EX07/Home2";
import About1 from "./components/PTIT_CNTT4_IT104_SS27_EX07/About1";
import NotFound from "./components/PTIT_CNTT4_IT104_SS27_EX07/NotFound";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/bai1",
      element: <EX01 />,
      children: [
        {
          index: true, 
          element: <Home />,
        },
        {
          path: "about", 
          element: <About />,
        },
        {
          path: "contact", 
          element: <Contact />,
        },
      ],
    },
{
  // bai2
      path: "/products",
      element: <ProductList></ProductList>,
    },
    {
      path: "/products/:id",
      element: <ProductDetail></ProductDetail>,
    },
    {
      // bai4
      path: "/products/:search",
      element: <ProductList></ProductList>,
    },
    {
      //bai3
      path:"/task",
      element:<TaskList></TaskList>
    },
    {
      path:"/task/:id",
      element:<TaskDetail></TaskDetail>
    },
     {
      //bai5
      path:"/blog",
      element:<BlogLayout></BlogLayout>
    },

{
   path: "/bai6",
        element: <EX06></EX06>,
        children: [
          {
            path: "home1",
            element: <Home1></Home1>,
          },
          {
            path: "product",
            element: <Product></Product>,
          },
          {
            path: "detail",
            element: <Detail></Detail>,
          },
        ],
},

//bai7
 {
            path: "home2",
            element: <Home2></Home2>,
          },
          {
            path: "about2",
            element: <About1></About1>,
          },
          {
            path: "*",
            element: <NotFound></NotFound>,
          },

    // {
      //bai8
    //   path: "/login",
    //   element: <Login/>,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
  ]);

  return <RouterProvider router={router} />;
}