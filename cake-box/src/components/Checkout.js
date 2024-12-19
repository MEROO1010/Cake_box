import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  background-color: #ffa500;
  color: white;
  border: none;
  padding: 0.8rem;
  cursor: pointer;
  font-size: 1rem;
`;

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Checkout</h2>
      <Input name="name" placeholder="Name" onChange={handleChange} />
      <Input name="email" placeholder="Email" onChange={handleChange} />
      <Input name="phone" placeholder="Phone Number" onChange={handleChange} />
      <Input name="address" placeholder="Delivery Address" onChange={handleChange} />
      <Button type="submit">Place Order</Button>
    </Form>
  );
};

export default Checkout;
