import React from 'react';
import ScreenPanel from './ScreenPanel';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="component-app">
        <div id="app-name">
          Calculator App created by Jimmyis
        </div>
        <ScreenPanel />
        <ButtonPanel />
      </div>
    );
  }
}
export default App;
