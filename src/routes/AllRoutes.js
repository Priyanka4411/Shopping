import React from 'react'
import { Routes,Route } from 'react-router-dom';
import {Home,Cart} from "../pages"

 export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/cart' element={<Cart/>} exact/>
      </Routes>
    </>
  )
}

