import React from "react";

// https://www.fyears.org/2016/12/learn-react-the-easy-way.html
// counter
export default class Counter extends React.Component {
  // pure func
  // need constructor
  constructor() {
    super();
    this.state = {count: 0};
  }
  
  
  // pure func
  incrementCount() {
    // this set state
    this.setState({
      // count one props
      // this.state.count
      // +1
      count: this.state.count + 1
    });
  }
  
  // all func
  // need to bind this
  render() {
    return (
      <div className="my-component">
        <h1>Count: {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount.bind(this)}>Increment</button>
      </div>
    );
  }
  
}
