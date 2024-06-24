// src/TextTransform.js
import React, { useState } from 'react';

const TextTransform = ({ text }) => {
  const [transformedText, setTransformedText] = useState(text);

  const makeUpperCase = () => {
    setTransformedText(transformedText.toUpperCase());
  };

  const makeLowerCase = () => {
    setTransformedText(transformedText.toLowerCase());
  };

  return (
    <div>
      <p>Բնօրինակ տեքստ.   {text}</p>
      <p>Փոխակերպված տեքստ.  {transformedText}</p>
      <button onClick={makeUpperCase}>Փոխակերպել մեծատառի</button>
      <button onClick={makeLowerCase}>Փոխակերպել փոքրատառի</button>
     
      <hr />
    </div>
  );
};

export default TextTransform;

