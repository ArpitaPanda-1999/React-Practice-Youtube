import React, {Component} from "react";


class ClassProps extends Component {
    
    render(){
        console.log(this.props);
        
        return(
            <>
                <h3>{this.props.name}</h3>
                <h4>{this.props.Email}</h4>
            </>
        )
    }
}

export default ClassProps;