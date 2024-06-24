import React, { useState } from 'react';

const LargestNumberFinder = ({ numbers }) => {
  const [largestNumber, setLargestNumber] = useState(null);

  const findLargestNumber = () => {
    const maxNumber = Math.max(...numbers);
    setLargestNumber(maxNumber);
  };

  return (
    <div>
         {largestNumber !== null && (
        <p>Ամենամեծ թիվն է. {largestNumber}-ը </p>
      )}
      <button onClick={findLargestNumber}>Գտեք ամենամեծ թիվը</button>
     
      <hr />
    </div>
  );
};

export default LargestNumberFinder;
