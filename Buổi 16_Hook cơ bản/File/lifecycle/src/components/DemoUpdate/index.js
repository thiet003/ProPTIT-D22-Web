import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
    }

 
  //1. componentWillUpdate
//   componentWillUpdate(nextProps, nextState) {
//     if (nextState.count !== this.state.count) {
//       console.log(`Count is about to update from ${this.state.count} to ${nextState.count}.`);
//     }
//   }
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1 });
//   };
  
  //2. componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Count has been updated:', this.state.count);
    }
  }
  handleClick() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.handleClick()}>Increment</button>
      </div>
    );
  }
}

export default MyComponent