import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './styles/globals';
import Header from './components/Header';
import { content } from './content';

const App = () => (
  <HelmetProvider>
    <Helmet>
      <meta charSet='utf-8' />
      <title>Froware</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap'
        rel='stylesheet'
      />
    </Helmet>
    <GlobalStyle />
    <Header text={content} />
  </HelmetProvider>
);

export default App;
