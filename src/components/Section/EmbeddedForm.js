import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from '../Form/';

const Container = styled.div`
  grid-column: 2/12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 745px;

  @media (min-width: 1024px) {
    height: 745px;
  }
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 316px;
`;

const EmbeddedForm = ({ title, body, children }) => (
  <Container>
    <Text>
      <h1>{title}</h1>
      {body.map((text, index) => (
        <p key={`${index}-${title}`} data-testid='section-text'>
          {text}
        </p>
      ))}
    </Text>
    <Form elementId='froware-form' />
  </Container>
);

EmbeddedForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  children: PropTypes.node,
};

export default EmbeddedForm;
