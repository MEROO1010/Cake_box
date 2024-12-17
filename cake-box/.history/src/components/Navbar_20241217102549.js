import React from 'react';
import styled from 'styled-components';
import Logo from "../assets/cake box.png"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;



const NavLinks = styled.div`
  a {
    margin: 0 10px;
    text-decoration: none;
    color: #333;
    font-weight: 600;

    &:hover {
      color: #ffcc00;
    }
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo><img src={Logo} alt=""/></Logo>
      <NavLinks>
        <a href="#home">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
