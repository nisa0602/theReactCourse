import { Component } from "react";

class SimpleEvents extends Component{

    handleClick(){
        console.log('TEST');
    }

    handleChange(){
        console.log('form changed')
    }

    handleSubmit(e){
        console.log('form submitted');

        e.preventDefault();
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick} className="btn">Click me</button>
                    <input onChange={this.handleChange} type="text" placeholder="Write your name"/>
                </form>
            </div>
        )
    }
}

export default SimpleEvents;