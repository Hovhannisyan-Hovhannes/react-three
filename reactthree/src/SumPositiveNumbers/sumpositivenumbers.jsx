import React from 'react';

const SumPositiveNumbers = ({ numbers }) => {
  const sumPositiveNumbers = () => {
    const positiveNumbers = numbers.filter(num => num > 0);
    const sum = positiveNumbers.reduce((acc, num) => acc + num, 0);
    alert(`Sum of positive numbers: ${sum}`);
  };

  return (
    <div>
      <button onClick={sumPositiveNumbers}>Հաշվարկել դրական թվերի գումարը</button>
      <hr />
    </div>
  );
};

export default SumPositiveNumbers;
