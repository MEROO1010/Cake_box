import React from "react";
import styled from "styled-components";
import CheckoutForm from "../components/Checkout";

const CheckoutContainer = styled.div`
  padding: 2rem;
`;

const Checkout = () => (
  <CheckoutContainer>
    <CheckoutForm />
  </CheckoutContainer>
);

export default Checkout;
