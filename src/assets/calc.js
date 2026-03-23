function ScientificCalculator() {
  
  // Array with detailed button configurations
  const buttons = [
    // Row 1
    { value: 'AC', type: 'clear', action: 'clearAll' },
    { value: 'C', type: 'clear', action: 'clear' },
    { value: '←', type: 'backspace', action: 'backspace' },
    { value: '÷', type: 'operator', action: 'divide' },
    
    // Row 2
    { value: '7', type: 'number', action: 'append' },
    { value: '8', type: 'number', action: 'append' },
    { value: '9', type: 'number', action: 'append' },
    { value: '×', type: 'operator', action: 'multiply' },
    
    // Row 3
    { value: '4', type: 'number', action: 'append' },
    { value: '5', type: 'number', action: 'append' },
    { value: '6', type: 'number', action: 'append' },
    { value: '-', type: 'operator', action: 'subtract' },
    
    // Row 4
    { value: '1', type: 'number', action: 'append' },
    { value: '2', type: 'number', action: 'append' },
    { value: '3', type: 'number', action: 'append' },
    { value: '+', type: 'operator', action: 'add' },
    
    // Row 5
    { value: '0', type: 'number', action: 'append' },
    { value: '.', type: 'decimal', action: 'append' },
    { value: '=', type: 'equals', action: 'calculate' },
    { value: '√', type: 'function', action: 'sqrt' }
  ];

    return buttons;
};

export default ScientificCalculator;
