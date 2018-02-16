import React from 'react';

class ScreenPanel extends React.Component {
  render() {
    return (
      <div>
        This is screen panel        
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default ScreenPanel;
