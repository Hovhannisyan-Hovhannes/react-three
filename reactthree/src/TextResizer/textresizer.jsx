import React, { useState } from 'react';

const TextResizer = ({ text }) => {
  const [fontSize, setFontSize] = useState(16); 

  const increaseFontSize = () => {
    setFontSize(prevFontSize => prevFontSize + 10);
  };

  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>
        {text}
      </p>
      <button onClick={increaseFontSize}> Սեղմեք ինձ վրա</button>
      <hr />
    </div>
  );
};

export default TextResizer;
