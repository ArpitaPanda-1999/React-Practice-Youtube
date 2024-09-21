import React, { Component } from "react";

class ClassIndex extends Component{

    constructor(){
        super();
        this.state = {
            item : "Hello this id AP's Class Page"
        }
    }
     
    changeItem = () => {
        this.setState ({
            item : "Hello Arpita Panda"
        })
    }


    render(){
        console.log(this.state.item);
        return(
            <>
                <h1>{this.state.item}</h1>
                <button onClick={this.changeItem}>Click to Change</button>
            </>
        )
    }
}

export default ClassIndex;