import React from 'react';
import Buttons from './Buttons';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        This is button panel
        <div>
          <div>
            <Buttons name="AC" />
            <Buttons name="+/-" />
            <Buttons name="%" />
            <Buttons name="÷" />
          </div>
          <div>
            <Buttons name="7" />
            <Buttons name="8" />
            <Buttons name="9" />
            <Buttons name="x" />
          </div>
          <div>
            <Buttons name="4" />
            <Buttons name="5" />
            <Buttons name="6" />
            <Buttons name="-" />
          </div>
          <div>
            <Buttons name="1" />
            <Buttons name="2" />
            <Buttons name="3" />
            <Buttons name="+" />
          </div>
          <div>
            <Buttons name="0" />
            <Buttons name="." />
            <Buttons name="=" />
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
