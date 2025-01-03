import React from "react";
import styled from "styled-components";
import gallery1 from "../assets/Gallery_1.png"
import gallery2 from "../assets/Gallery_2.png"
import gallery3 from "../assets/Gallery_3.png"
import gallery4 from "../assets/Gallery_4.png"

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
        <img src={gallery1} alt="Gallery 1" />
        <img src={gallery2} alt="Gallery 2" />
        <img src={gallery3} alt="Gallery 3" />
        <img src={gallery4} alt="Gallery 4" />
      </ImageGrid>
    </InstagramSection>
  );
}

export default InstagramGallery;
