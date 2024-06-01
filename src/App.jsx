//Packages
import React from "react"

//Local Imports
import AllRoutes from './Components/AllRoutes' // Importing AllRoutes Component
import Navbar from "./Components/Navbar"  // Importing Navbar Component

function App() {
 
  return (
    <>
    {/* Navbar Component */}
     <Navbar/> 
     {/* AllRoutes Component */}
     <AllRoutes/>
    </>
  )
}

export default App
