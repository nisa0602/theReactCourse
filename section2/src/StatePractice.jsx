import { Component } from "react";

class StatePractice extends Component{

    constructor(){
        super();
        this.state = {
            message: "",
            imgWidth: ""
        }
    }

    handleOnFocus = () =>{
        this.setState({
            message: 'You agree on web terms'
        })
    }

    handleMouse = () => {
        this.setState({
            message: ""
        })
    }

    handleOnLoad = (e) => {
        //console.dir(e)
        //console.log(e.target.width)
        if(e.target.width > 100){
            console.log('Your img is big')
        }
    }
    render(){
        return(
            <>
                <input onFocus={this.handleOnFocus} type="text" placeholder="write message"/>
                <h3 onMouseEnter={this.handleMouse}>{this.state.message}</h3>
                <img onLoad={this.handleOnLoad} src="https://img-c.udemycdn.com/course/240x135/2195280_49b2_2.jpg" alt="" />
            </>
        )
    }
}

export default StatePractice;