import React from "react";
import styled from "styled-components";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoicon from "../assets/cake box.png"

const FooterContainer = styled.footer`
  background-color: #f4c2c2;
  padding: 30px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
  font-family: Arial, sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 20px;
  }
`;

const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    width: 80px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 0.9rem;
  }
`;

const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #333;
    text-decoration: none;
    margin: 5px 0;
    font-size: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  button {
    border: 1px solid #333;
    background-color: transparent;
    color: #333;
    padding: 8px 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: #333;
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;

  i {
    font-size: 1.2rem;
    color: #6c6c6c;
    cursor: pointer;

    &:hover {
      color: #ff6f61;
    }
  }
`;

const FooterBottom = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 0.8rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLeft>
        <img src={logoicon} alt="Cake Box Logo" />
        <p>© 2023 Cake Box</p>
      </FooterLeft>

      <FooterCenter>
        <a href="#news">News</a>
        <a href="#about">About Us</a>
        <a href="#blog">Blog</a>
      </FooterCenter>

      <FooterRight>
        <button>Write</button>
        <SocialIcons>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-facebook-f"></i>
        </SocialIcons>
      </FooterRight>
    </FooterContainer>
  );
}

export default Footer;

