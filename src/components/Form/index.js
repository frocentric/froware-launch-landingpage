import React from 'react';
import useResource from './useResource';

const Form = ({ elementId }) => {
  useResource('https://froware-form.netlify.app/js/froware-form.js', 'script');
  useResource(
    'https://froware-form.netlify.app/styles/froware-form.css',
    'link'
  );
  
  return <div id={elementId} />;
};

export default Form;
