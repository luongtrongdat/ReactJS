import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function EX06() {
  return (
    <div>
        <NavLink to={"home"}>Home</NavLink>
        <NavLink to={"product"}>Product</NavLink>
        <NavLink  to={"detail"}>Detail</NavLink>
        <hr />
        <Outlet></Outlet>
        <hr />
    </div>
  )
}