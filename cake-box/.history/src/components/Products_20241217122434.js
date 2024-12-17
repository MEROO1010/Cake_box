import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Cake from "../assets/cake.png"
const ProductsSection = styled.section`
  padding: 50px;
  background-image: url(${Cake});
  background-size: cover;


`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  h4 {
    margin: 10px 0;
  }
`;

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/products/').then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <ProductsSection>
      <h2>Our Products</h2>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{product.price} SR</p>
          </ProductCard>
        ))}
      </ProductGrid>
    </ProductsSection>
  );
}

export default Products;
