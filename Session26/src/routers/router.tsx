import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import PrivateRouter from '../components/PrivateRouter'
import Account from '../components/Account'
import Login from '../components/Login'
import Products from '../pages/Product'
import ProductDetail from '../components/ProductDetail'
import Student from '../pages/Student'
import StudentDetail from '../components/StudentDetail'
import TeamsIndex from '../components/PTIT_CNTT4_IT104_SS26_EX07/TeamsIndex'
import Team from '../components/PTIT_CNTT4_IT104_SS26_EX07/Team'
import Teams from '../components/PTIT_CNTT4_IT104_SS26_EX07/Teams'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>
    },
    {
        path: '/account',
        element: <PrivateRouter element={<Account></Account>}></PrivateRouter>,
        children:[
        {
          path:"abc",
          element:<PrivateRouter element={<></>}></PrivateRouter>
        }
      ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
      path:"/products",
      element:<Products></Products>
    },
    {
      path:"/products/:productsID",
      element:<ProductDetail></ProductDetail>
    },
    {
      path:"/student",
      element:<Student></Student>
    },
    {
      path:"/student/:studentName",
      element:<StudentDetail></StudentDetail>
    },
    {
      path:"/teams",
      element:<Teams></Teams>,
      children:[
        {
          index:true,
          element:<TeamsIndex></TeamsIndex>
        },
        {
          path:":id",
          element:<Team></Team>
        }]
    }
])
