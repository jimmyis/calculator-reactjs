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

  // Will set all state to null, as intend to be All Clear (AC)
  if (button === 'AC') {
    return {
      total: null,
      toCalculate: null,
      operation: null,
    }
  }

  // Logic 1: No operation yet

  // If input button is not a number but an operator, 
  //   and there's no any number pending in `toCalculate` state
  //   just add math operator to the `operation` state
  if (!state.toCalculate) {
    return { operation: button }
  }

  // If there's a number pending in `toCalculate` state
  //  so the operator button will be save `operation` state 
  //  and `toCalculate` state will be shift to `total` state
  //  then set `toCalculate` state to null again
  return {
    total: state.toCalculate,
    toCalculate: null,
    operation: button,
  }
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