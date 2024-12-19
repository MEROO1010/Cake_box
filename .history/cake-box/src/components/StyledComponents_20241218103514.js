import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: #fffae3;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Section = styled.section`
  padding: 20px;
`;

export const Title = styled.h1`
  color: #333;
  font-size: 28px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #ffdf00;
  border: none;
  padding: 10px 15px;
  color: #333;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #f0c400;
  }
`;

export const Input = styled.input`
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ddd;
  width: 100%;
`;
