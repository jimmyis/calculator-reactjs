import React from 'react';
import ScreenPanel from './ScreenPanel';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null, // Keep summarization of all operation and display
      toCalculate: null, // Keep next value to operate with 'total' prop
      operation: null, // Keep the value that pass from each button ('buttonName' in this code)
    };
  }

  whenClick = (buttonName) => {
    console.log(calc(this.state, buttonName)) // Output to console, to debug
    this.setState(calc(this.state, buttonName))
  }

  render() {
    return (
      <div className="component-app">
        <div id="app-name">
          Calculator App created by Jimmyis { this.toCalculate }
        </div>
        <ScreenPanel value={this.state.toCalculate || this.state.total || '0'}/>
        <ButtonPanel clickHandler={this.whenClick}/>
      </div>
    );
  }
}
export default App;

// Main Calculation function, return a new state set
function calc (state, button) {
  if(checkNumber(button)) {
    console.log(button + ' is a number')
  }

  return {
    total: button,
    toCalculate: button,
    operation: button,
  };
}

// Check Number function to Check if an input character is a number
function checkNumber(input) {
  return !!input.match(/[0-9]+/);
}

// Operate function, to operate between summary amount of calculation and new number, return operated number
function operate(number1st, number2st, operator) {
  // should return operated result of `number1st` with `number2nd`
  //  when `number1st` expected to be summary amount of calculation or initial number (0)
  //  `number2nd` expected to be newly added number to operate (`toCalculate` from the state)
  //  and `operator` should be a math operator
}