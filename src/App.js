import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { GlobalStyle } from './styles/globals';
import Header from './components/Header/';
import Sections from './components/Sections/';
import { content } from './content';
import Footer from './components/Footer';

const App = () => {
    const refs = [];
    content.sections.forEach((_) => {
      refs.push(React.createRef(null));
    });

    const handleClick = (id) => {
      refs[id].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    };

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Frocentric:Tech | The premier community for Black tech professionals</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <GlobalStyle />
      <Header buttonText={content.headerButton} onClick={handleClick} lastSection={content.sections.length - 1}/>
      <Sections sections={content.sections} onClick={handleClick} refs={refs} />
      <Footer content={content.footer} />
    </HelmetProvider>
  );
};

export default App;
