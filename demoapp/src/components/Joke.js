import React, { useState } from "react";

function Joke(props) {
  const [joke, setJoke] = useState();
  const newJoke = async () => {
    let newJoke = await (
      await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      )
    ).json();
    setJoke(newJoke);
    props.newJoke();
  };
  return (
    <div>
      {joke ? (
        <div>
          <h1 style={{ color: "green" }}>{joke["0"]["setup"]}</h1>
          <h2 style={{ color: "red" }}>{joke["0"]["punchline"]}</h2>
        </div>
      ) : (
        "This is a Joke"
      )}
      <br />
      jokes provided by: {props.jokester}
      <div>
        <button onClick={newJoke}> New Joke!</button>
      </div>
    </div>
  );
}
export default Joke;
