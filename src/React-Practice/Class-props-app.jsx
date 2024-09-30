import ClassProps from "./Class-props";
import React, {Component} from "react";

class ClassPropsApp extends Component{
    constructor(){
        super();
        this.state = "Arpita Panda";
        this.mail = "arpita@abc.com"
    }

    render(){
        return(
            <>
                <ClassProps name = {this.state.name} Email = {this.mail.Email} />
                <button onClick={() => this.setState({name : "Aman Prasad", Email : "aman@adc.com"})}>Click to Change</button>
            </>
        )
    }
}

export default ClassPropsApp;