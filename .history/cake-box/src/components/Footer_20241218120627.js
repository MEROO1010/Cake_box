import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: #fef9e7;
  margin-top: 2rem;
`;

const Footer = () => (
  <FooterWrapper>
    <p>&copy; {new Date().getFullYear()} Cake Box. All rights reserved.</p>
  </FooterWrapper>
);

export default Footer;
