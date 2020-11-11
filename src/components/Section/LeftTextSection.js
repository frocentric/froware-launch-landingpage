import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextWrapper = styled.div`
  grid-column: 2/7;
`;

const Image = styled.img`
  grid-column: 7/12;
`;

const LeftTextSection = ({ title, body, image }) => (
  <>
    <TextWrapper>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`}>{text}</p>
      ))}
    </TextWrapper>
    <Image src={image} alt={title} />
  </>
);

LeftTextSection.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
};

export default LeftTextSection;
