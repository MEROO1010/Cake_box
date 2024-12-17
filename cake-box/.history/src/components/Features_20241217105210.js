import React from 'react';
import styled from 'styled-components';
import car from "../assets/car.png"
import gloves from "../assets/gloves.png"
import croissant from "../assets/croissant.png"

const FeaturesSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 50px 0;
`;

const FeatureBox = styled.div`
  margin: 0 20px;
  text-align: center;

  h3 {
    margin-top: 10px;
    font-size: 1.2rem;
  }
`;

function Features() {
  return (
    <FeaturesSection>
      <FeatureBox>
      <img src={gloves} alt=""/>
        <h3>The freshest ingredients</h3>
      </FeatureBox>
      <FeatureBox>
      <img src={car} alt=""/>

        <h3>Fast delivery</h3>
      </FeatureBox>
      <FeatureBox>
      <img src={croissant} alt=""/>

        <h3>Handmade baked goods</h3>
      </FeatureBox>
    </FeaturesSection>
  );
}

export default Features;
