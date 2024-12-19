import React from "react";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: #fffae3;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

const NavLinks = styled.div`
  a {
    margin: 0 15px;
    text-decoration: none;
    color: #555;
    &:hover {
      color: #333;
    }
  }
`;

const Header = () => {
  return (
    <Navbar>
      <div>Cake Box</div>
      <NavLinks>
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/order">Order</a>
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
