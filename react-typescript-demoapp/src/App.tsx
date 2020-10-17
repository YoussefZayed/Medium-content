import React, { useState } from "react";
import "./App.css";
import { Joke } from "./components/Joke";

function App() {
  const [jokeNumber, setjokeNumber] =  useState(0)
  const increaseJoke = () => {
    setjokeNumber(jokeNumber + 1)
    console.log(jokeNumber)
  };
  return (
    <div className="HelloWorld">
      Joke number: {jokeNumber}
      <Joke jokester={"Youssef"} newJoke={increaseJoke} />
    </div>
  );
}

export default App;
