import React, { useState } from "react";
import { PageContainer, Section, Title, Input, Button } from "./StyledComponents";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <PageContainer>
      <Section>
        <Title>Checkout</Title>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            placeholder="Email"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input
            placeholder="Phone Number"
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Input
            placeholder="Delivery Address"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <Button type="submit">Place Order</Button>
        </form>
      </Section>
    </PageContainer>
  );
};

export default Checkout;
