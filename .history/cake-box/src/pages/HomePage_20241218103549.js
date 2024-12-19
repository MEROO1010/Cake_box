import React from "react";
import { PageContainer, Section, Title, Button } from "./StyledComponents";

const HomePage = () => {
  return (
    <PageContainer>
      <Section>
        <Title>Cakes Crafted with Love</Title>
        <p>
          Discover the freshest and tastiest cakes delivered straight to your
          doorstep.
        </p>
        <Button>Explore Now</Button>
      </Section>
      <Section>
        <Title>Our Products</Title>
        {/* Product Cards */}
        <div>
          <img src="/path/to/cake.jpg" alt="Cake" />
          <p>Chocolate Cake - 40.00 SR</p>
        </div>
      </Section>
    </PageContainer>
  );
};

export default HomePage;
