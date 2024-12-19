import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductCard = ({ name, price, image, rating }) => (
  <Card>
    <Image src={image} alt={name} />
    <h3>{name}</h3>
    <p>Price: {price} SR</p>
    <p>Rating: {rating} ★</p>
  </Card>
);

export default ProductCard;
