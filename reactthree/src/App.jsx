import React from 'react';
import TextResizer from './TextResizer/textresizer';
import LargestNumberFinder from './LargestNumberFinder/largestnumberfinder';
import SumNumbers from './SumNumbers/sumnumbers';
import SumPositiveNumbers from './SumPositiveNumbers/sumpositivenumbers';
import OddEvenChecker from './OddEvenChecker/oddevenchecker';
import TextTransform from './TextTransform/texttransform';
import SumComponent from './SumComponent/sumcomponent';

function App() {
  const text = "Բարև Աշխարհ!";
  const numbersArray = [5, -10, 15, 20, -25, 30];
  const numberToCheck =10;
  return (
    <div className="App">
      <TextTransform text ={text} />
      <SumComponent num1={15} num2={25} />
      <TextResizer text={text} />
      <LargestNumberFinder numbers={numbersArray} />
      <SumNumbers numbers={numbersArray}/>
      <SumPositiveNumbers numbers={numbersArray} />
      <OddEvenChecker number={numberToCheck} />
    </div>
  );
}
export default App;
