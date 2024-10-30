import React from "react";
class Chil extends React.Component {
    constructor(props) {
        super()
        this.state = {
            counter : 0
        }
    }
    handleClickPlus = (e) => {
        this.setState({counter : this.state.counter + 1});
    }
    handleClickMinus = (e) => {
        this.setState({counter : this.state.counter - 1});
    }
    render() {
        return (<>
            <button onClick={this.handleClickPlus}>+</button>
            <button onClick={this.handleClickMinus}>-</button>
            <h2>Giá trị: {this.state.counter}</h2>
        </>)
    }
}
export default Chil