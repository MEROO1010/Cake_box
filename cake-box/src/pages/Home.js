import React from "react";
import styled from "styled-components";
import ProductList from "../components/ProductList";

const HomeContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Home = () => (
  <HomeContainer>
    <Heading>Welcome to Cake Box 🎂</Heading>
    <p>Order the best cakes for your special moments!</p>
    <h3>Featured Products</h3>
    <ProductList />
  </HomeContainer>
);

export default Home;
