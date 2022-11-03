// import { useState } from 'react'
import axios from 'axios';
import { Component } from 'react';
// import ModalBs from './ModalBs';

class App extends Component{
  constructor(){
    super();
    this.state = {
      temp: "",
      cityName: "",
      low: "",
      high: "",
      weather: "",
      icon: "",
    }
  }

  componentDidMount(){
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d'
    axios.get(url).then((res)=>{
      this.setState({
        temp: res.data.main.temp,
        cityName: res.data.name,
        low: res.data.main.temp_min,
        high: res.data.main.temp_max,
        weather: res.data.weather[0].description,
        icon: res.data.weather[0].icon
      })
    })
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  }

  render(){
    const iconURL = ` http://openweathermap.org/img/wn/${this.state.icon}@2x.png`
    return (
      <div className="App">
        <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

        <div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.cityName}</h4>
            <p>High: {this.state.high} - Low: {this.state.low}</p>
            <p>{this.state.weather} <img src={iconURL}/></p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
          </div>
        </div>
      </div>
    )
  }
  }

export default App
