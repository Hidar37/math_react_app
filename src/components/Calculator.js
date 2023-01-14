import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <section className="result">0</section>
        <section className="btn-nums-wrapper">
          {/* Row 1 */}
          <button type="button" id="ac">AC</button>
          <button type="button" id="plus-minus">+/-</button>
          <button type="button" id="persantage">%</button>
          <button type="button" id="divider" className="operation">/</button>
          {/* Row 2 */}
          <button type="button" id="nine">9</button>
          <button type="button" id="eight">8</button>
          <button type="button" id="seven">7</button>
          <button type="button" id="mulit" className="operation">x</button>
          {/* Row 3 */}
          <button type="button" id="six">6</button>
          <button type="button" id="five">5</button>
          <button type="button" id="four">4</button>
          <button type="button" id="minus" className="operation">-</button>
          {/* Row 4 */}
          <button type="button" id="three">3</button>
          <button type="button" id="tow">2</button>
          <button type="button" id="one">1</button>
          <button type="button" id="plus" className="operation">+</button>
          {/* Row 5 */}
          <button type="button" id="zero" className="last-line">0</button>
          <button type="button" id="dot" className="last-line">.</button>
          <button type="button" id="equal" className="operation last-line">=</button>
        </section>
      </div>
    );
  }
}
export default Calculator;
