import React from 'react';
const OddEvenChecker = ({ number }) => {
  const checkOddEven = () => {
    if (number % 2 === 0) {
      alert(`The number ${number} is even.`);
    } else {
      alert(`The number ${number} is odd.`);
    }
  };

  return (
    <div>
         <p style={{ color: number % 2 === 0 ? 'green' : 'red' }}>
        {number} is {number % 2 === 0 ? 'even' : 'odd'}
      </p>
      <button onClick={checkOddEven}>Ստուգեք կենտ/զույգ</button>
     
      <hr />
    </div>
  );
};

export default OddEvenChecker;
