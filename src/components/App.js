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

// Calculation function
function calc (state, button) {
  console.log(button)
  
  return {
    total: button,
    toCalculate: button,
    operation: button,
  };
}