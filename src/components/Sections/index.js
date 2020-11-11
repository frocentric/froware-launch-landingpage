import React from 'react';
import PropTypes from 'prop-types';
import Section from '../Section';

const Sections = ({ sections }) => {
  const refs = [];
  sections.forEach((_) => {
    refs.push(React.createRef(null));
  });

  const handleClick = (id) => {
    console.log(id);
    console.log(sections.length);
    refs[id].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {sections.map((section, index) => (
        <Section
          key={section.title}
          section={section}
          ref={refs[index]}
          onClick={handleClick}
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
