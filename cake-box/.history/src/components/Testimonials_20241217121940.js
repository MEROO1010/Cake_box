import React from "react";
import styled from "styled-components";

const TestimonialSection = styled.section`
  padding: 50px 20px;
  background-color: #fdf6f8;
  text-align: center;
`;

const TestimonialGrid = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TestimonialCard = styled.div`
  max-width: 600px;
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  align-items: center;

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
  }

  h4 {
    margin-top: 10px;
    font-size: 1.2rem;
    color: #333;
  }

  span {
    font-size: 1rem;
    color: #ff6f61;
  }
`;

function Testimonials() {
  const reviews = [
    {
       
      name: "Ali",
      review: "Very tasty cakes and prices are pleasant to the eye.",
    },
    {
      name: "Salma",
      review: "Fast delivery and friendly staff. All liked it. We'll come again.",
    },
    {
      name: "Mona",
      review:
        "Fresh and delicious pastries. I will definitely come back here to try the whole range.",
    },
  ];

  return (
    <TestimonialSection>
      <h2>What Our Customers Say</h2>
      <TestimonialGrid>
        {reviews.map((review, index) => (
          <TestimonialCard key={index}>
            <p>"{review.review}"</p>
            <h4>- {review.name}</h4>
          </TestimonialCard>
        ))}
      </TestimonialGrid>
    </TestimonialSection>
  );
}

export default Testimonials;
