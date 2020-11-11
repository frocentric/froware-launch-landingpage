import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  align-items: center;
  height: 745px;
`;

const Container = styled.div`
  grid-column: 2/12;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 506px;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 316px;
`;

const Children = styled.div`
  width: 371px;
  height: 226px;
  background: #c4c4c4;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EmbeddedForm = ({ title, body, children }) => (
  <Grid>
    <Container>
      <Text>
        <h1>{title}</h1>
        {body.map((text, index) => (
          <p key={`${index}-${title}`} data-testid='section-text'>
            {text}
          </p>
        ))}
      </Text>
      <Children>{children}</Children>
    </Container>
  </Grid>
);

EmbeddedForm.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.array.isRequired,
  children: PropTypes.node,
};

export default EmbeddedForm;
