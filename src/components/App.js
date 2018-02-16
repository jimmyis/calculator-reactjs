import React from 'react';
import ScreenPanel from './ScreenPanel';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
  }

  whenClick = (buttonName) => {
    this.setState({total: buttonName})
  }

  render() {
    return (
      <div className="component-app">
        <div id="app-name">
          Calculator App created by Jimmyis
        </div>
        <ScreenPanel value={this.state.next || this.state.total || '0'}/>
        <ButtonPanel clickHandler={this.whenClick}/>
      </div>
    );
  }
}
export default App;
