import React from 'react';
import styled from 'styled-components';
import HomePage from "../assets/HomePage.png"

const HeroSection = styled.section`
  height: 70vh;
  background:url(${HomePage});
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const HeroContent = styled.div`
  color: #fff;

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  button {
    padding: 10px 20px;
    font-size: 1rem;
    border: none;
    background: #66ff99;
    color: #000;
    cursor: pointer;
    border-radius: 5px;

    &:hover {
      background: #33cc66;
    }
  }
`;

function Hero() {
  return (
    <HeroSection>
      <HeroContent>
        <h1>Cakes Crafted with Love</h1>
        
        <button>Explore Now</button>
      </HeroContent>
    </HeroSection>
  );
}

export default Hero;
