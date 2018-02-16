import React from 'react';

class Buttons extends React.Component {
  render() {
    return (
      <div>
        <button>
          {this.props.name}
        </button>
      </div>
    );
  }
}
export default Buttons;
