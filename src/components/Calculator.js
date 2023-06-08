import React, { useState } from 'react';
import './Quotes.css';
import './Calculator.css';
import calculate from '../logic/calculate';
import ChildComponent from './ChildComponent';

const Calculator = () => {
  const [calcData, setCalcData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calcData, buttonName);
    setCalcData(newData);
  };

  return (
    <div className="calculator-wrapper">
      <div>
        <h1>Título de la Calculadora</h1>
      </div>
      <div className="calculator-container">
        <ChildComponent
          calcData={calcData}
          handleButtonClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default Calculator;
