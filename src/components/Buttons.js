import React from 'react';
import './Buttons.css'

class Buttons extends React.Component {
  whenClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <div className="buttons-component">
        <button onClick={this.whenClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Buttons;
