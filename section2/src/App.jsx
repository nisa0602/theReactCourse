import { Component } from 'react';
import { useState } from 'react';
import StateInAction from './StateInAction';
// import reactLogo from './assets/react.svg'
import './App.css'

class App extends Component {
  // const [count, setCount] = useState(0)
  render(){
    
    return (
      <div className="App">
        <h1>Turned to class component!</h1>
        <StateInAction name="Nisa"/>
      </div>
    )
  }
}

export default App
