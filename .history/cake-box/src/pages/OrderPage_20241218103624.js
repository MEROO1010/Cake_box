import React, { useState } from 'react';
import Cart from '../components/Cart';
import { OrderContainer, Input, TextArea, SubmitButton } from './styles/OrderStyles';

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', address: '' });

  const updateQuantity = (product, change) => {
    setCartItems(cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    alert("Order Placed Successfully!");
    setCartItems([]); // Clear cart
  };

  return (
    <OrderContainer>
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeItem={removeItem} />
      <h2>Checkout</h2>
      <form>
        <Input name="name" placeholder="Name" onChange={handleInputChange} required />
        <Input name="email" type="email" placeholder="Email" onChange={handleInputChange} required />
        <Input name="phone" placeholder="Phone" onChange={handleInputChange} required />
        <TextArea name="address" placeholder="Delivery Address" onChange={handleInputChange} required />
        <SubmitButton type="button" onClick={handleSubmit}>Place Order</SubmitButton>
      </form>
    </OrderContainer>
  );
};

export default OrderPage;
