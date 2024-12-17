import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  padding: 50px 20px;
  background-color: #fdf6f8;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
`;

const AboutImage = styled.img`
  width: 60%;
  max-width: 400px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const AboutText = styled.div`
  max-width: 800px;

  h2 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 20px;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }
`;

function AboutUs() {
  return (
    <AboutSection id="about">
      <AboutImage src="/path-to-cupcake-image.jpg" alt="Cupcakes" />
      <AboutText>
        <h2>About Us</h2>
        <p>
          Cake Box has been a beloved fixture in our city for over a decade,
          making it an integral part of our community's culinary landscape. Our
          journey has been one filled with passion and dedication, as we've
          lovingly prepared your favorite pastries while continually surprising
          you with exciting new creations.
        </p>
      </AboutText>
    </AboutSection>
  );
}

export default AboutUs;
