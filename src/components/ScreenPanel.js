import React from 'react'
import './ScreenPanel.css'

class ScreenPanel extends React.Component {
  render() {
    return (
      <div className="screenpanel-component">
        This is screen panel        
        <div>
          {this.props.value}
        </div>
      </div>
    );
  }
}

export default ScreenPanel;
