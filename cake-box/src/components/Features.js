import React from 'react';
import styled from 'styled-components';

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
        <h3>The freshest ingredients</h3>
      </FeatureBox>
      <FeatureBox>
        <h3>Fast delivery</h3>
      </FeatureBox>
      <FeatureBox>
        <h3>Handmade baked goods</h3>
      </FeatureBox>
    </FeaturesSection>
  );
}

export default Features;
