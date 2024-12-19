import React from 'react';
import { HeaderContainer, Nav, NavItem, Logo } from './styles/HeaderStyles';
import styled from 'styled-components';


 HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffefa1;
  padding: 15px 30px;
`;

 Logo = styled.h1`
  font-size: 1.8rem;
  color: #ff4500;
  font-weight: bold;
`;

 Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

 NavItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  &:hover {
    color: #ff4500;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Cake Box</Logo>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/products">Products</NavItem>
        <NavItem href="/order">Order</NavItem>
        <NavItem href="/about">About Us</NavItem>
        <NavItem href="/contact">Contact</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
