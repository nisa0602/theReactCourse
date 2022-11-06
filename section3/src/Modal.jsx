import { Component } from "react";

class Modal extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4>{this.props.city}</h4>
                    <p>High: {this.props.high} - Low: {this.props.low}</p>
                    <p>{this.props.weather} <img src={this.props.icon}/></p>
                </div>
                <div className="modal-footer">
                    <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
                </div>
            </div>
        )
    }
}
export default Modal;