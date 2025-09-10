// import React from 'react'
// import EX01_2 from './components/PTIT_CNTT4_IT104_SS25_EX01+2/EX01_2'
// import EX03_4 from './components/PTIT_CNTT4_IT104_SS25_EX03+4/EX03_4'
// import EX05 from './components/PTIT_CNTT4_IT104_SS25_EX05/EX05'
// import EX06 from './components/PTIT_CNTT4_IT104_SS25_EX06/EX06'
// import EX07 from './components/PTIT_CNTT4_IT104_SS25_EX07/EX07'
// import EX08 from './components/PTIT_CNTT4_IT104_SS25_EX08/EX08'
// import EX09 from './components/PTIT_CNTT4_IT104_SS25_EX09/EX09'
// export default function App() {
//   return (
//     <div>
//       <EX01_2></EX01_2>
//       <EX03_4></EX03_4>
//       <EX05></EX05>
//       <EX06></EX06>
//       <EX07></EX07>
//       <EX08></EX08>
//       <EX09></EX09>
//     </div>
//   )
// }





import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Admin from './layout/Admin'
import UserManager from './pages/UserManager'
import ProductManager from './pages/ProductManager'
import './App.css'
import Oder from './pages/Oder'
import Login from './pages/Login'
import ProductDetail from './pages/ProductDetail'
import ProductedRoute from './component/ProductedRoute'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: 'contact',
      element: <Contact></Contact>
    },
    {
      path: 'login',
      element: <Login></Login>
    },
    {
      path: '/admin',
      element: <ProductedRoute element={<Admin></Admin>}></ProductedRoute>,
      children: [
        {
          path: 'user',
          element: <UserManager></UserManager>
        },
        {
          path: 'product',
          element: <ProductManager></ProductManager>
        },
        {
          path: 'oder',
          element: <Oder></Oder>
        },
        {
          path: 'product/:id',
          element: <ProductDetail></ProductDetail>
        }
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}
