import React from 'react';

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
        <div id="screen-panel">
          This is screen panel
        </div>
        <div id="button-panel">
          This is buttons panel
        </div>
      </div>
    );
  }
}
export default App;
