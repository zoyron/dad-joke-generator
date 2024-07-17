import React from "react";
import { useState } from "react";
import Button from "./Button";
import { getDadJoke } from "./services/jokeService";

export default function Dadjokes() {
  const [joke, setJoke] = useState('Click on the button to generate a Dad Joke')
  const generateJoke = () {
    try {
      const newJoke = await getDadJoke();
      setJoke(newJoke);
    } catch (error) {
      console.log(error);
      setJoke('Failed to get a joke, please try again!');
    }
  }

  return <>
    <h2>{joke}</h2>
    <Button onClick={generateJoke} text="Generate" />
  </>
}