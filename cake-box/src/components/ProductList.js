import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styled from "styled-components";
import axios from "../services/api";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
`;

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products/").then((response) => setProducts(response.data));
  }, []);

  return (
    <Grid>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </Grid>
  );
};

export default ProductList;
