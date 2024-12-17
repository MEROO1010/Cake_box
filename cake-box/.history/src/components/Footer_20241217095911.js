import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #f8d7da;
  padding: 20px 0;
  text-align: center;
  color: #333;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 5px 0;
    font-size: 0.9rem;
  }

  a {
    color: #333;
    text-decoration: none;
    margin: 5px;

    &:hover {
      color: #ff6f61;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;

  i {
    font-size: 1.2rem;
    margin: 0 10px;
    cursor: pointer;

    &:hover {
      color: #ff6f61;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <p>© 2024 Cake Box. All rights reserved.</p>
        <p>
          <a href="#about">About Us</a> | <a href="#blog">Blog</a> |{" "}
          <a href="#contact">Contact</a>
        </p>
        <SocialIcons>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-facebook"></i>
          <i className="fab fa-twitter"></i>
        </SocialIcons>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
