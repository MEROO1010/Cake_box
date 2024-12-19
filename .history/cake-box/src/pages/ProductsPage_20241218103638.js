import React, { useEffect, useState } from "react";
import axios from "../api/api";
import { PageContainer, Section, Title } from "./StyledComponents";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products/").then((res) => setProducts(res.data));
  }, []);

  return (
    <PageContainer>
      <Section>
        <Title>Our Cakes</Title>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price} SR</p>
            </div>
          ))}
        </div>
      </Section>
    </PageContainer>
  );
};

export default ProductPage;
