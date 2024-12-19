import React, { useState } from "react";
import styled from "styled-components";

const CartContainer = styled.div`
  padding: 2rem;
  background-color: #fffde7;
  min-height: 80vh;
`;

const Heading = styled.h2`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
`;

const Th = styled.th`
  padding: 1rem;
  border-bottom: 2px solid #ccc;
  text-align: left;
  font-weight: bold;
`;

const Td = styled.td`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  text-align: left;
`;

const Image = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 5px;
`;

const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Button = styled.button`
  padding: 0.3rem 0.6rem;
  background-color: #ff9800;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #fb8c00;
  }
`;

const RemoveButton = styled(Button)`
  background-color: #e53935;

  &:hover {
    background-color: #d32f2f;
  }
`;

const Total = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: right;
`;

const CheckoutButton = styled(Button)`
  display: block;
  margin: 1rem auto;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  background-color: #4caf50;

  &:hover {
    background-color: #43a047;
  }
`;

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Chocolate Cake",
      price: 40,
      quantity: 2,
      image: "https://via.placeholder.com/70",
    },
    {
      id: 2,
      name: "Cup Cake",
      price: 12,
      quantity: 3,
      image: "https://via.placeholder.com/70",
    },
  ]);

  // Function to increase the quantity
  const increaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease the quantity
  const decreaseQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Function to remove an item from the cart
  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <CartContainer>
      <Heading>Your Cart</Heading>
      {cartItems.length > 0 ? (
        <>
          <Table>
            <thead>
              <tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Total</Th>
                <Th>Action</Th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <Td>
                    <Image src={item.image} alt={item.name} />
                  </Td>
                  <Td>{item.name}</Td>
                  <Td>{item.price} SR</Td>
                  <Td>
                    <QuantityContainer>
                      <Button onClick={() => decreaseQuantity(item.id)}>-</Button>
                      <span>{item.quantity}</span>
                      <Button onClick={() => increaseQuantity(item.id)}>+</Button>
                    </QuantityContainer>
                  </Td>
                  <Td>{item.price * item.quantity} SR</Td>
                  <Td>
                    <RemoveButton onClick={() => removeItem(item.id)}>
                      Remove
                    </RemoveButton>
                  </Td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Total>Total: {totalPrice} SR</Total>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </CartContainer>
  );
};

export default Cart;
