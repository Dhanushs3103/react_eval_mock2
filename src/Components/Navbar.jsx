//Packages
import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Spacer } from '@chakra-ui/react'

//Local Imports

export default function Navbar() {
  return (
    <>
      <Flex p={5} fontSize={"20px"} fontWeight={"500"} boxShadow= {"rgba(0, 0, 0, 0.04) 0px 3px 5px"}>
        <Spacer/>
        <Link to="/">Home</Link>
        <Spacer/>
        <Link to="/about">About</Link>
        <Spacer/>
        <Link to="/products">Products</Link>
        <Spacer/>
        <Link to="/login">Login</Link>
        <Spacer/>
      </Flex>
    </>
  )
}
