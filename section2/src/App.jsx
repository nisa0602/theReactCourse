import { Component } from 'react';
import { useState } from 'react';
//import StateInAction from './StateInAction';
//import SimpleEvents from './SimpleEvents';
//import EventAndState from './EventAndState';
//import StatePractice from './StatePractice';
import CardSet from './CardSet';
import cards from './card';

console.log(cards)

class App extends Component {
  // const [count, setCount] = useState(0)
  render(){
    
    return (
      <div className="App">
          <div className="row">
              <CardSet cards={cards}/>
          </div>
      </div>
    )
  }
}

export default App
