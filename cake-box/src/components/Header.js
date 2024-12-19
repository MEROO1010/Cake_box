import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  background-color: #fef9e7;
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  text-decoration: none;
  color: #333;
  font-weight: bold;

  &:hover {
    color: #ffa500;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <h1>Cake Box</h1>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/order">Order</NavLink>
      <NavLink to="/checkout">Checkout</NavLink>
    </nav>
  </HeaderWrapper>
);

export default Header;
