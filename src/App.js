import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './styles/globals';
import Header from './components/Header/';
import { Form } from './components/Form';
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
    <Header buttonText={content.headerButton} />
    <Form
      elementId="froware-form"
      scriptSrc="https://froware-form.netlify.app/js/froware-form.js"
      cssHref= "https://froware-form.netlify.app/styles/froware-form.css"
    />

  </HelmetProvider>
);

export default App;
