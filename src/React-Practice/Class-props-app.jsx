import ClassProps from "./Class-props";
import React, {Component} from "react";

class ClassPropsApp extends Component{
    constructor(){
        super();
        this.state = {
            name : "Arpita Panda",
            Email : "arpita@abc.com"
        }
    }

    render(){
        return(
            <>
                <ClassProps name = {this.state.name}  Email = {this.state.Email} />
                <button onClick={() => this.setState({name : "Aman Prasad", Email : "aman@adc.com"})}>Click Name</button>
            </>
        )
    }
}

export default ClassPropsApp;