import React from 'react';

class Buttons extends React.Component {
  whenClick = () => {
    this.props.clickHandler(this.props.name);
  }

  render() {
    return (
      <div>
        <button onClick={this.whenClick}>
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Buttons;
