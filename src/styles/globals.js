import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 16px;
    line-height: 30px;

    @media (min-width: 768px) {
      font-size: 18px;
      line-height: 36px;
    }
    
    @media (min-width: 1440px) {
      font-size: 22px;
      line-height: 36px;
    }

  }

  * {
    box-sizing: border-box;
  }

  h1 {
    font-weight: 900;
    font-size: 30px;
    line-height: 50px;

    @media (min-width: 768px) {
      font-size: 36px;
    }
  
    @media (min-width: 1440px) {
      font-size: 40px;
    }
  }
`;
