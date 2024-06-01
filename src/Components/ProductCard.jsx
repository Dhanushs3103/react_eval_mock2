//Packages
import React from "react";
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
import { useNavigate } from "react-router-dom";

//Local imports

export default function ProductCard({ product }) {
  let { id,images, title, price, category, brand } = product;
  let [image] = images;
  let navigate = useNavigate();


  return (
    <div>
      <Card maxW="sm">
        <CardBody>
          <Image
            width={"300px"}
            height={"280px"}
            textAlign={"center"}
            src={image}
            alt="image of product"
            margin={"auto"}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Title: {title}</Heading>
            <Text fontSize="xl">
              Category: {category} 
            </Text>
            <Text fontSize="xl">
              Brand: {brand? brand : "N/A"} 
            </Text>
            <Text color="blue.600" fontSize="2xl">
              Price: ${price}
            </Text>
          </Stack>
        </CardBody>
        <hr />
        <CardFooter>
          <Button variant="solid" colorScheme="blue" size="md" onClick={() => {
            navigate(`/products/${id}`);
          }}>
            View Product
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
