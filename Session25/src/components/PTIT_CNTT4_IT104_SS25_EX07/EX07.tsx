import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CustomLink from './CustomLink'

export default function EX07() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomLink />} />
      </Routes>
    </BrowserRouter>
  )
}