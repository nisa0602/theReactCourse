import { Component } from 'react';
import { useState } from 'react';
//import StateInAction from './StateInAction';
//import SimpleEvents from './SimpleEvents';
//import EventAndState from './EventAndState';
import StatePractice from './StatePractice';
import './App.css'

class App extends Component {
  // const [count, setCount] = useState(0)
  render(){
    
    return (
      <div className="App">
        <StatePractice />
      </div>
    )
  }
}

export default App
