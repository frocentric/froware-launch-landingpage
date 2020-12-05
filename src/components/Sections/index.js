import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';

const Sections = ({ sections, refs, onClick }) => {


  return (
    <>
      {sections.map((section, index) => (
        <Section
          key={section.title}
          section={section}
          ref={refs[index]}
          onClick={onClick}
          id={index}
        />
      ))}
    </>
  );
};

Sections.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      alignment: PropTypes.string.isRequired,
      image: PropTypes.string,
      title: PropTypes.string.isRequired,
      body: PropTypes.array.isRequired,
    })
  ),
};

export default Sections;
