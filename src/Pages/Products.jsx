//Packages
import React from "react";
import { Container, Flex, Select } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";

//Local imports
import ProductsLoadingIndicator from "../Components/ProductsLoadingIndicator"; // importing loading skelton indicator
import ErrorIndicator from "../Components/ErrorIndicator"; // importing Loading Indicator
import ProductCard from "../Components/ProductCard";

// API_URl
let API_URl = `https://dummyjson.com/products?`;

export default function Products() {
  let [loading, setLoading] = useState(false); // loading state.
  let [error, setError] = useState(false); // Error state.
  let [productsData, setProductsData] = useState([]); // state for maintaining products data.
  let [category, setCategory] = useState(""); // state for maintaining category.
  let [sortValue, setSortValue] = useState(""); // state for maintaining sort value.
  //function to get data from the API,
  async function getData(category, sortValue) {
    setLoading(true);
    
    try {
      let res = await axios({
        method: "get",
        url: `${API_URl}category/${category}&sortBy=price&order=${sortValue ? sortValue : "asc"}`,
        
      });
      setProductsData(res.data.products);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  function handleSort(e) {
    setSortValue(e.target.value);
  }

  function handleFilter(e) {
    setCategory(e.target.value);
  }

  useEffect(() => {
    getData(category, sortValue);
  }, [category, sortValue]);

  if (loading) {
    return <ProductsLoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "500",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Products Page
      </h1>

      <Container maxW={"7xl"} margin={"auto"}>
        {loading ? (
          <ProductsLoadingIndicator />
        ) : (
          <>
            {/* sorting and filtering section */}
            <Flex gap="20px">
              <Select
                placeholder="Sort By price"
                size="lg"
                value={sortValue}
                onChange={handleSort}
              >
                <option value="asc">Low to High</option>
                <option value="desc">High to low</option>
              </Select>
              <Select
                placeholder="Filter by category"
                size="lg"
                value={category}
                onChange={handleFilter}
              >
                <option value="beauty">beauty</option>
                <option value="fragrances">fragrances</option>
                <option value="furniture">furniture</option>
                <option value="groceries">groceries</option>
              </Select>
            </Flex>

            {/* All Products */}
            <Container
              maxW={"8xl"}
              margin={"auto"}
              p={4}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                gap: "20px",
              }}
            >
              {productsData.map((product, index) => {
                return <ProductCard key={index} product={product} />;
              })}
            </Container>
          </>
        )}
      </Container>
    </>
  );
}
