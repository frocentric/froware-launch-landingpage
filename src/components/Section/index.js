import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CentredSection from './CentredSection';
import RightTextSection from './RightTextSection';
import LeftTextSection from './LeftTextSection';
import EmbeddedForm from './EmbeddedForm';
import Button from '../Button';

const handleBackgroundColour = (alignment) => {
  switch (alignment) {
    case 'left':
      return '#EBEBEB';
    case 'centre':
      return '#f4f4f4';
    default:
      return '#fff';
  }
};

const Container = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(12, 1fr);
`;

const Wrapper = styled.div`
  background-color: ${({ alignment }) => handleBackgroundColour(alignment)};
  grid-column: 1/-1;
  height: 745px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-items: center;
`;

const Section = React.forwardRef(({ section, onClick, id }, ref) => {
  const { alignment, image, title, body } = section;

  const SECTIONS = {
    centre: <CentredSection title={title} body={body} />,
    left: <LeftTextSection title={title} body={body} image={image} />,
    right: <RightTextSection title={title} body={body} image={image} />,
    none: (
      <EmbeddedForm title={title} body={body}>
        Chat / Form
      </EmbeddedForm>
    ),
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
