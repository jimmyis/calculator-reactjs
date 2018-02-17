import React from 'react';
import Decimal from 'decimal.js';
import ScreenPanel from './ScreenPanel';
import ButtonPanel from './ButtonPanel';
import './App.css';

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
      <div className="app-component">
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

  // Logic 2: Number buttons
  //  check if a pressed button is a number
  //  by using `checkNumber()` helper function
  if(checkNumber(button)) {
    console.log(button + ' is a number')

    // Logic 2.1: `0` button
    //   If button is number 0 and `toCalculate` state is also 0
    //   so return blank object.
    if (button === '0' && state.toCalculate === '0') {
      return {}
    }

    // Logic 2.3: If operation pending
    //   If `operation` state existed,
    //    return number to `toCalculate` state
    //   or if `toCalculate` state exist, 
    //   update `toCalculate` state with concatnate numbers
    if (state.operation) {
      if (state.toCalculate) {
        return { toCalculate: state.toCalculate + button };
      }
      return { toCalculate: button };
    }

    // Logic 2.4: If no operation pending
    //   If `operation` state is not existed,
    //     return `toCalculate` state with concatnate numbers
    //     and `total` state with null.
    if (state.toCalculate) {
      return {
        toCalculate: state.toCalculate + button,
        total: null,
      };
    }

    // Logic 2.2: return a new state
    //  as button (number) to be `toCalculate` state
    //  and set `total` state to null
    return {
      toCalculate: button,
      total: null,
    }
  }

  // Logic 3: Operator buttons
  
  // Logic 3.1: `AC` button
  //  set all state to null, as intend to be All Clear (AC)
  if (button === 'AC') {
    return {
      total: null,
      toCalculate: null,
      operation: null,
    }
  }

  // Logic 3.2: `.` point button
  //  if there is no states, and point button was pressed, 
  //    add `0.` to `total` state
  if (button === '.') {

    // if `toCalculate` state is pending
    //   add `.` point after number in `toCalculate` state and return
    //  but if `toCalculate` state has `.` point existed
    //   so just return empty object to do nothing.
    if (state.toCalculate) {
      if (state.toCalculate.includes('.')) {
        return {};
      }
      return { toCalculate: state.toCalculate + '.' };
    }

    // if `operation` state is pending
    //   set `toCalculate` state to `0.`
    if (state.operation) {
      return { toCalculate: '0.' };
    }

    // if `total` state is pending,
    //   add `.` point to `total state
    // but if `total` state has `.` point existed
    //   just return empty object to do nothing.
    if (state.total) {
      if (state.total.includes('.')) {
        return {};
      }
      return { total: state.total + '.' };
    }
    return { total: '0.' };
  }

  // Logic 3.3: `+/-` Plus/Minus button
  //   if `+/-` Plus/Minus button was pressed
  //     return empty object to do nothing
  //    but if `toCalculate` state existed
  //     convert number in `toCalculate` state to be negative
  //     and return value as a string to `toCalculate` state.
  //    or if `total` state existed
  //     convert number in `total` state to be negative
  //     and return value as a string to `total` state.
  if (button === '+/-') {
    if (state.toCalculate) {
      return { toCalculate: (-1 * parseFloat(state.toCalculate)).toString() };
    }
    if (state.total) {
      return { total: (-1 * parseFloat(state.total)).toString() };
    }
    return {};
  }

  // Logic 3.4: `=` Equals button
  //   if `=` equals button was pressed
  //     return `total` state with calculated value using `operate` function
  //       and set `toCalculate` and `operation` state to null
  //     but no `toCalculate` and `operation` state existed
  //       so return empty object (do nothing)
  if (button === '=') {
    if (state.toCalculate && state.operation) {
      return {
        total: operate(state.total, state.toCalculate, state.operation),
        toCalculate: null,
        operation: null,
      }
    } else {
      return {}
    }
  }

  // Logic 1: State checking
  // If there's no operation yet
  //   and If input button is not a number but an operator,
  
  // Logic 1.2
  //   and if there is any number existing in `toCalculate` state
  if (state.operation) {
    return {
      total: operate(state.total, state.toCalculate, state.operation),
      toCalculate: null,
      operation: button,
    };
  }

  // Logic 1.1
  //   and there's no any number pending in `toCalculate` state
  //   just add math operator to the `operation` state
  if (!state.toCalculate) {
    return { operation: button }
  }

  // Logic 1.3
  //  If there's a number pending in `toCalculate` state
  //    so the operator button will be save `operation` state 
  //    and `toCalculate` state will be shift to `total` state
  //    then set `toCalculate` state to null again
  return {
    total: state.toCalculate,
    toCalculate: null,
    operation: button,
  }
}

// Check Number helper function 
//   to Check if an input character is a number
//   by match the input with `String.prototype.match()` method
//   and expect to return `true` or `false` (using `cast-to-bool` aka `!!` )
function checkNumber(input) {
  return !!input.match(/[0-9]+/);
}

// Operate function, to operate between summary amount of calculation and new number, return operated number
function operate(number1st, number2nd, operator) {
  // should return operated result of `number1st` with `number2nd`
  //  when `number1st` expected to be summary amount of calculation or initial number (0)
  //  `number2nd` expected to be newly added number to operate (`toCalculate` from the state)
  //  and `operator` should be a math operator
  
  const first = new Decimal(number1st)
  const second = new Decimal(number2nd)
  if (operator === '+') {
    return first.plus(second).toString()
  }
  if (operator === '-') {
    return first.minus(second).toString()
  }
  if (operator === 'x') {
    return first.times(second).toString()
  }
  if (operator === '÷') {
    return first.div(second).toString()
  }
  if (operator === '%') {
    return first.mod(second).toString()
  }
}