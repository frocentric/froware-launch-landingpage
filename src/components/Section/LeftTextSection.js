import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  grid-column: 2/12;

  @media (min-width: 1024px) {
    grid-column: 2/7;
  }
`;

const Image = styled.img`
  grid-column: 2/12;
  max-width: 100%;
  padding-top: 30px;

  @media (min-width: 1024px) {
    grid-column: 7/12;
    padding: 80px 0;
  }
`;

const MobileView = ({ title, body, image }) => (
  <>
    <Image src={image} alt={title} />

    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </TextWrapper>
  </>
);

const DesktopView = ({ title, body, image }) => (
  <>
    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </TextWrapper>
    <Image src={image} alt={title} />
  </>
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
