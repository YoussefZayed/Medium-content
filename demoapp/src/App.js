import React from 'react';
import {useState} from 'react';

import './App.css';
import Joke from './components/Joke';

function App() {
  
  const [jokenumber, setJokenumber] = useState(0);
  const increaseJoke = () =>
  {
    setJokenumber(jokenumber + 1);
    console.log(jokenumber);
  }
  return (
    <div className="HelloWorld">
      Joke number: {jokenumber}
      <br/>
     <Joke jokester = {"Youssef"} newJoke={increaseJoke}/>
    </div>
  );
}

export default App;
