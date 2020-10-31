import React from 'react';

export const Form = ({ elementId, scriptSrc, cssHref }) => {

  const script = document.createElement('script');
  script.src = scriptSrc
  const css = document.createElement('link')
  css.rel = "stylesheet"
  css.href = cssHref

  document.body.append(script);
  document.head.append(css);

  return (
    <div id={elementId} />
  )
}