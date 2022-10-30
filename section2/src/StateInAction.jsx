import { Component } from "react";

class StateInAction extends Component{
    constructor(){
        super();
        this.state = {
            text: "State in Action"
        }
        setTimeout(() => {
            this.setState({
                text: 'State changed'
            })
        }, 3000)
    }
    render(){
        return(
            <h1>{this.state.text} - {this.props.name}</h1>
        )
    }
};

export default StateInAction;