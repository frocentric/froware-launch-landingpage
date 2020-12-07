import { useEffect } from 'react';

const useResource = (src: string, type: string) => {
  useEffect(() => {
    let resourceElement: HTMLLinkElement | HTMLScriptElement;
    if (type === 'script') {
      resourceElement = document.createElement('script');
      resourceElement.src = src;
      resourceElement.async = true;
      resourceElement.type = 'text/javascript';
    } else {
      resourceElement = document.createElement('link');
      resourceElement.href = src;
      resourceElement.rel = 'stylesheet';
      resourceElement.type = 'text/css';
    }

    document.body.appendChild(resourceElement);

    return;
  }, [src, type]);

  return;
};

export default useResource;
