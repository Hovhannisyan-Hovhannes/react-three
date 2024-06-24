import React, { useState } from 'react';

const SumComponent = ({ num1, num2 }) => {
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    const result = num1 + num2;
    setSum(result);
  };

  return (
    <div>
        <p>{num1}-ի և {num2}-ի գումարը հետևյալն է: {sum}</p>
      <button onClick={calculateSum}>Հաշվել գումարը</button>
      
      <hr />
    </div>
  );
};

export default SumComponent;
