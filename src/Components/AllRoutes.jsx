//Packages
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Local Imports
import Home from "../Pages/Home";
import About from "../Pages/About";
import Products from "../Pages/Products";
import SingleProduct from "../Pages/SingleProduct";
import Login from "../Pages/Login";

export default function AllRoutes() {
  return (
    <> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}
