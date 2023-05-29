import React from 'react';
import PropTypes from 'prop-types';

const buttons = [
  { value: 'AC', className: 'calculatorButton mathButton' },
  { value: '+/-', className: 'calculatorButton mathButton' },
  { value: '%', className: 'calculatorButton mathButton' },
  { value: '÷', className: 'calculatorButton mathButtonOrange' },
  { value: '7', className: 'calculatorButton' },
  { value: '8', className: 'calculatorButton' },
  { value: '9', className: 'calculatorButton' },
  { value: 'x', className: 'calculatorButton mathButtonOrange' },
  { value: '4', className: 'calculatorButton' },
  { value: '5', className: 'calculatorButton' },
  { value: '6', className: 'calculatorButton' },
  { value: '-', className: 'calculatorButton mathButtonOrange' },
  { value: '1', className: 'calculatorButton' },
  { value: '2', className: 'calculatorButton' },
  { value: '3', className: 'calculatorButton' },
  { value: '+', className: 'calculatorButton mathButtonOrange' },
  { value: '0', className: 'calculatorButton zero' },
  { value: '.', className: 'calculatorButton' },
  { value: '=', className: 'calculatorButton mathButtonOrange' },
];

function ChildComponent({ calcData, handleButtonClick }) {
  return (
    <div className="calculator container">
      <input
        className="inputContainer"
        type="text"
        id="myInput"
        name="name"
        pattern="[0-9+\-*/(). ]+"
        value={calcData.next || calcData.total || ''}
        onChange={() => {}}
      />
      <div className="buttonContainer">
        {buttons.map((button) => (
          <button
            key={button.value}
            className={button.className}
            type="button"
            onClick={() => handleButtonClick(button.value)}
          >
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}

ChildComponent.propTypes = {
  calcData: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default ChildComponent;
