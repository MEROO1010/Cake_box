import React from "react";
import styled from "styled-components";

const InstagramSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  background-color: #fff;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

function InstagramGallery() {
  return (
    <InstagramSection>
      <h2>Our Instagram - let's be friends!</h2>
      <ImageGrid>
        <img src="/path-to-image1.jpg" alt="Gallery 1" />
        <img src="/path-to-image2.jpg" alt="Gallery 2" />
        <img src="/path-to-image3.jpg" alt="Gallery 3" />
        <img src="/path-to-image4.jpg" alt="Gallery 4" />
      </ImageGrid>
    </InstagramSection>
  );
}

export default InstagramGallery;
