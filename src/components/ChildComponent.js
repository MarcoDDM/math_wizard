function ChildComponent() {
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

  return (
    <div className="calculator">
      <input className="inputContainer" type="text" id="myInput" name="name" pattern="[0-9+\-*/(). ]+" />
      <div className="buttons">
        {buttons.map((button, index) => (
          <input
            key={index}
            className={button.className}
            type="button"
            value={button.value}
          />
        ))}
      </div>
    </div>
  );
}

export default ChildComponent;
