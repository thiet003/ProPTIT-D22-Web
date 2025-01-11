import React from 'react';
import ReactDOM from 'react-dom';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritefood: "rice"};
  }

  //1. 
  componentDidMount() {
    setTimeout(() => {
        if(this.state.favoritefood === "rice"){
            this.setState({favoritefood: "pizza"})
        }
        else if(this.state.favoritefood === "pizza"){
            this.setState({favoritefood: "rice"})
        }
    }, 1000)
  }
  // //2.
  // static getDerivedStateFromProps(props, state) {
  //   return {favoritefood: "abc" };
  // }

  //3. shouldComponentUpdate: xem có nên render lại hay ko
    // shouldComponentUpdate(nextProps, nextState) {
    //     // Only re-render if the favoriteFood state has changed
    //     return this.state.favoritefood !== nextState.favoritefood;
    // }

    changeFoodRice = () => {
        this.setState({favoritefood: "rice"})
    }
    changeFoodPizza = () => {
        this.setState({favoritefood: "pizza"})
    }

    //4. getSnapshotBeforeUpdate
    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //   document.getElementById("div1").innerHTML =
    //   "Before the update, the favorite was " + prevState.favoritefood;
    // }
    render() {
        return (
            <div>
                <h1>My Favorite Food is {this.state.favoritefood}</h1>
                <button type="button" onClick={this.changeFoodRice}>Change food Rice</button>
                <button type="button" onClick={this.changeFoodPizza}>Change food Pizza</button>
                <hr></hr>
                <div>Test Get Snapshot
                  <p>My Favorite Food is {this.state.favoritefood}</p>
                  <div id="div1"></div>
                  <div id="div2"></div>
                </div>
            </div>
        );
    }
}

export default Header