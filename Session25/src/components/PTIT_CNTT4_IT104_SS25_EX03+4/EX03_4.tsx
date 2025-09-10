import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function EX03_4() {
    const router = createBrowserRouter([
        {
            path: "login",
            element: <Login></Login>
        },
        {
            path: "register",
            element: <Register></Register>
        }
    ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}