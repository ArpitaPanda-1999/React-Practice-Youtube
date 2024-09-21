import React, {Component} from "react";

class ClassIndex1 extends Component{
    constructor(){
        super();
        this.state = {
            count : 0,
        };
    }

    substract = () => {
        this.setState({count : this.state.count - 1})
    }

    add = () => {
        this.setState({count : this.state.count + 1})
    }

    render(){
        return(
            <>
                <button onClick={this.substract}>-</button>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>+</button>
            </>
        )
    }
}

export default ClassIndex1;