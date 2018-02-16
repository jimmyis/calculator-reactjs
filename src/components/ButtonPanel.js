import React from 'react';

class ButtonPanel extends React.Component {
  render() {
    return (
      <div>
        This is button panel
        <div>
          <div>
            <div class="button">AC</div>
            <div class="button">+/-</div>
            <div class="button">%</div>
            <div class="button">÷</div>
          </div>
          <div>
            <div class="button">7</div>
            <div class="button">8</div>
            <div class="button">9</div>
            <div class="button">x</div>
          </div>
          <div>
            <div class="button">4</div>
            <div class="button">5</div>
            <div class="button">6</div>
            <div class="button">-</div>
          </div>
          <div>
            <div class="button">1</div>
            <div class="button">2</div>
            <div class="button">3</div>
            <div class="button">+</div>
          </div>
          <div>
            <div class="button">0</div>
            <div class="button">.</div>
            <div class="button">=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;
