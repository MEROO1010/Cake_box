import React from "react";
import styled from "styled-components";
import ProductList from "../components/ProductList";

const ProductsContainer = styled.div`
  padding: 2rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Products = () => (
  <ProductsContainer>
    <Heading>All Products</Heading>
    <ProductList />
  </ProductsContainer>
);

export default Products;
