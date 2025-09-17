import React from 'react'
import { RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import routers from './routers/Router';

export default function App() {
  return (
    <div>
      trang chu
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}