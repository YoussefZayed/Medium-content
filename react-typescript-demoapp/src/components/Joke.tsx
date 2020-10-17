import React, { useState } from "react";

interface Props {
  jokester: string;
  newJoke: () => void;
}

export const Joke: React.FC<Props> = ({ jokester, newJoke }) => {
  const [joke, setJoke] = useState();
  const getJoke = async () => {
    let theJoke = await (
      await fetch(
        "https://official-joke-api.appspot.com/jokes/programming/random"
      )
    ).json();
    setJoke(theJoke);
    newJoke();
  }
  return (
    <div>
      <br />
      {joke ? (
        <div>
          <h1 style={{ color: "green" }}>{joke["0"]["setup"]}</h1>
          <h2 style={{ color: "red" }}>{joke["0"]["punchline"]}</h2>
        </div>
      ) : (
        "This is a Joke"
      )}
      <br />
      jokes provided by: {jokester}
      <div>
        <button onClick={getJoke}> New Joke! </button>
      </div>
    </div>
  );
};
