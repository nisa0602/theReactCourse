// import { useState } from 'react'
import axios from 'axios';
import { Component } from 'react';
// import ModalBs from './ModalBs';
import Header from './Header';
import Modal from './Modal';

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
      isRaining: ""
    }
  }

  //place to store http req method, DOM node, update state
  componentDidMount(){
    this.getCityWeather('London');

    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems);
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.weather !== prevState.weather){
      const isRaining = this.state.weather.includes('rain');
      if(isRaining){
        this.setState({
          isRaining: "Rain..rain Go away!"
        })
      } else {
        this.setState({
          isRaining: "Hooray"
        })
      }
    }
  }

  searchCity = (e) => {
    e.preventDefault();
    const city = document.querySelector('#city').value;
    this.getCityWeather(city);
  }

  getCityWeather = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=e312dbeb8840e51f92334498a261ca1d`
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
  }

  render(){
    console.log('render running')
    const iconURL = ` http://openweathermap.org/img/wn/${this.state.icon}@2x.png`
    return (
      <div className="App">
        <div className='row'>
            <div className="col s6 offset-s3">
             {/* <h1>{this.state.temp}</h1>
              <h3>{this.state.isRaining}</h3> */}
              <Header temp={this.state.temp} isRaining={this.state.isRaining}/>

              <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
              <form onSubmit={this.searchCity}>
                <input id='city' type="text" placeholder='Enter a city name' />
              </form>
            </div>
        </div>
        
        <Modal city={this.state.cityName} 
               high={this.state.high}
               low={this.state.low}
               weather={this.state.weather}
               icon={iconURL}
        />
        {/*<div id="modal1" className="modal">
          <div className="modal-content">
            <h4>{this.state.cityName}</h4>
            <p>High: {this.state.high} - Low: {this.state.low}</p>
            <p>{this.state.weather} <img src={iconURL}/></p>
          </div>
          <div className="modal-footer">
            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Ok</a>
          </div>
            </div> */}
      </div>
    )
  }
  }

export default App
