import React from 'react';
import {
  CartContainer,
  Table,
  TableHeader,
  TableRow,
  TableData,
  TotalContainer,
  Button
} from './styles/CartStyles';
import styled from 'styled-components';


const Cart = ({ cartItems, updateQuantity, removeItem }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table>
            <thead>
              <TableRow>
                <TableHeader>Product</TableHeader>
                <TableHeader>Price</TableHeader>
                <TableHeader>Quantity</TableHeader>
                <TableHeader>Total</TableHeader>
                <TableHeader>Action</TableHeader>
              </TableRow>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <TableRow key={item.id}>
                  <TableData>{item.name}</TableData>
                  <TableData>{item.price} SR</TableData>
                  <TableData>
                    <Button onClick={() => updateQuantity(item, -1)}>-</Button>
                    {item.quantity}
                    <Button onClick={() => updateQuantity(item, 1)}>+</Button>
                  </TableData>
                  <TableData>{(item.price * item.quantity).toFixed(2)} SR</TableData>
                  <TableData>
                    <Button onClick={() => removeItem(item)} danger>Remove</Button>
                  </TableData>
                </TableRow>
              ))}
            </tbody>
          </Table>
          <TotalContainer>
            <h3>Total: {calculateTotal()} SR</h3>
          </TotalContainer>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;



 CartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff8e8;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

 Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

 TableHeader = styled.th`
  background-color: #ffb347;
  color: white;
  padding: 10px;
  text-align: left;
`;

TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

 TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

 TotalContainer = styled.div`
  text-align: right;
  margin-top: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`;

 Button = styled.button`
  background-color: ${(props) => (props.danger ? '#ff4500' : '#ffa500')};
  color: white;
  border: none;
  padding: 5px 10px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${(props) => (props.danger ? '#d32f2f' : '#ff7f00')};
  }
`;