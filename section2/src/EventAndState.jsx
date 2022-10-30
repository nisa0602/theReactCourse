import { Component } from "react";

class EventAndState extends Component{
    constructor(){
        super();
        this.state = {
            inputText: ""
        }
    }
    handleClick = () => {
        this.setState({
            inputText: " "
        })
    }

    handleChange = (e) => {
        //console.dir(e.target.vale);
        this.setState({
            inputText: e.target.value
        })
        console.log(this.state.inputText);
    }

    handleSubmit = (e) => {
        this.setState({
            inputText: 'state is cool'
        })

        e.preventDefault();
    }
    render(){
        return(
            <div>
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click me</button>
                    <input onChange={this.handleChange} type="text" placeholder="Write your name"/>
                </form>
            </div>
        )
    }
}

export default EventAndState;