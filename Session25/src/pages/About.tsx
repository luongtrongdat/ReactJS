import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate1= useNavigate();
  const handleLogin=()=>{
    navigate1('/login');
  }
  return (
    <div>
      Trang about
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}
