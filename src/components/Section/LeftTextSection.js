import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  align-items: center;

  @media (min-width: 1024px) {
    grid-gap: 20px;
  }
`;

const TextWrapper = styled.div`
  grid-column: 2/12;

  @media (min-width: 1024px) {
    grid-column: 2/7;
  }
`;

const Image = styled.img`
  grid-column: 2/12;
  width: 50%;
  padding: 40px 0 30px 0;
  justify-self: center;

  @media (min-width: 768px) {
    grid-column: 2/12;
    width: 40%;
  }

  @media (min-width: 1024px) {
    grid-column: 8/12;
    width: 80%;
    padding: 0;
  }
`;

const MobileView = ({ title, body, image }) => (
  <Container>
    <Image src={image} alt={title} />

    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </TextWrapper>
  </Container>
);

const DesktopView = ({ title, body, image }) => (
  <Container>
    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </TextWrapper>
    <Image src={image} alt={title} />
  </Container>
);

const LeftTextSection = ({ title, body, image }) => {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const resizeHandler = () => setIsSmallerScreen(window.innerWidth < 1024);

  useEffect(() => {
    setIsSmallerScreen(window.innerWidth < 1024);
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <>
      {isSmallerScreen ? (
        <MobileView title={title} body={body} image={image} />
      ) : (
        <DesktopView title={title} body={body} image={image} />
      )}
    </>
  );
};

LeftTextSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default LeftTextSection;
