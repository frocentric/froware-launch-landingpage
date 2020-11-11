import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 22px;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-size: 40px;
    font-weight: 900;
  }
`;
