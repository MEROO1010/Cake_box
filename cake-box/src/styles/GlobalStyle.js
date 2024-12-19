import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f8f9fa;
    color: #333;
  }

  h1, h2, h3 {
    color: #444;
  }
`;

export default GlobalStyle;
