import React from 'react'
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useParams } from "react-router-dom";

//Local imports
import LoadingIndicator from "../Components/LoadingIndicator"
import ErrorIndicator from "../Components/ErrorIndicator"; // importing Loading Indicator

// API_URl
let API_URl = `https://dummyjson.com/products`

export default function SingleProduct() {
  let [loading, setLoading] = useState(false); // loading state.
  let [error, setError] = useState(false); // Error state.
  let [product, setProduct] = useState({}); // state for maintaining products data.
  let navigate = useNavigate();
  let {id} = useParams();

  async function getData() {
    setLoading(true);
    
    try {
      let res = await axios({
        method: "get",
        url: `${API_URl}/${id}`,
        
      });
      setProduct(res.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }
  
  
  return (
    <>
      <h1 style={{textAlign:"center",fontSize:"30px", fontWeight:"500", marginTop:"20px", marginBottom:"20px"}}>Single Product Page</h1> 
      {/* product */}
      <div>
      <Card maxW="sm" margin={"auto"}>
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Title: {product.title}</Heading>
            <Text fontSize="xl">
              Category: {product.category} 
            </Text>
            <Text fontSize="xl">
              Brand: {product.brand? product.brand : "N/A"} 
            </Text>
            <Text fontSize="xl">
              Description: {product.description} 
            </Text>
            <Text fontSize="xl">
              Discount: {product.discountPercentage} 
            </Text>
            <Text fontSize="xl">
              {/* Rating: {product.reviews[0].rating}  */}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              Price: {product.price}
            </Text>
          </Stack>
        </CardBody>
        <hr />
        <CardFooter>
          <Button variant="solid" colorScheme="blue" size="md" onClick={() => {
            navigate(`/products`);
          }}>
            Back 
          </Button>
        </CardFooter>
      </Card>
    </div>
    </>
  )
}
