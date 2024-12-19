import React from "react";
import styled from "styled-components";

const OrderContainer = styled.div`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Order = () => (
  <OrderContainer>
    <Heading>Order Confirmed 🎉</Heading>
    <p>Thank you for placing your order! Your cakes will be delivered soon.</p>
  </OrderContainer>
);

export default Order;
