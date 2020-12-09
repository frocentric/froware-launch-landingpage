import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Hero from './Hero';
import RightTextSection from './RightTextSection';
import LeftTextSection from './LeftTextSection';
import EmbeddedForm from './EmbeddedForm';
import Button from '../Button';

const handleBackgroundColour = (alignment) => {
  switch (alignment) {
    case 'left':
      return '#EBEBEB';
    case 'hero':
      return '#f4f4f4';
    default:
      return '#fff';
  }
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (min-width: 1024px) {
    height: 100vh;
  }
`;

const Wrapper = styled.div`
  background-color: ${({ alignment }) => handleBackgroundColour(alignment)};
  grid-column: 1/-1;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

const Section = React.forwardRef(({ section, onClick, id }, ref) => {
  const { alignment, image, title, body } = section;

  const SECTIONS = {
    hero: <Hero title={title} body={body} image={image} />,
    left: <LeftTextSection title={title} body={body} image={image} />,
    right: <RightTextSection title={title} body={body} image={image} />,
    none: <EmbeddedForm title={title} body={body} />,
  };
  
  return (
    <Container ref={ref}>
      <Wrapper alignment={alignment}>
        {SECTIONS[alignment]}{' '}
        {alignment !== 'none' && <Button onClick={onClick} sectionId={id} />}
      </Wrapper>
    </Container>
  );
});

Section.propTypes = {
  sections: PropTypes.shape({
    alignment: PropTypes.string.isRequired,
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    body: PropTypes.array.isRequired,
  }),
};

export default Section;
