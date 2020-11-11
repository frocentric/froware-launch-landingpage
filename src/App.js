import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './styles/globals';
import Header from './components/Header/';
import Sections from './components/Sections/';
import EmbeddedForm from './components/Sections/EmbeddedForm'
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
    <Sections sections={content.sections.slice(0, -1)} />
    <EmbeddedForm title={content.sections[content.sections.length - 1].title} body={content.sections[content.sections.length - 1].body}>
      Chat / Form
    </EmbeddedForm>
  </HelmetProvider>
);

export default App;
