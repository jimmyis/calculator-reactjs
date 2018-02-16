import React from 'react';
import Buttons from './Buttons';

class ButtonPanel extends React.Component {
  whenClick = (buttonsName) => {
    this.props.clickHandler(buttonsName);
  }

  render() {
    return (
      <div>
        This is button panel
        <div>
          <div>
            <Buttons name="AC" clickHandler={this.whenClick} />
            <Buttons name="+/-" clickHandler={this.whenClick} />
            <Buttons name="%" clickHandler={this.whenClick} />
            <Buttons name="÷" clickHandler={this.whenClick} />
          </div>
          <div>
            <Buttons name="7" clickHandler={this.whenClick} />
            <Buttons name="8" clickHandler={this.whenClick} />
            <Buttons name="9" clickHandler={this.whenClick} />
            <Buttons name="x" clickHandler={this.whenClick} />
          </div>
          <div>
            <Buttons name="4" clickHandler={this.whenClick} />
            <Buttons name="5" clickHandler={this.whenClick} />
            <Buttons name="6" clickHandler={this.whenClick} />
            <Buttons name="-" clickHandler={this.whenClick} />
          </div>
          <div>
            <Buttons name="1" clickHandler={this.whenClick} />
            <Buttons name="2" clickHandler={this.whenClick} />
            <Buttons name="3" clickHandler={this.whenClick} />
            <Buttons name="+" clickHandler={this.whenClick} />
          </div>
          <div>
            <Buttons name="0" clickHandler={this.whenClick} />
            <Buttons name="." clickHandler={this.whenClick} />
            <Buttons name="=" clickHandler={this.whenClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
