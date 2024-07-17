import React from "react";
import { useState } from "react";
import { Card, CardActions } from "@mui/material";
import Button from "./Button";
import { getDadJoke } from "./services/jokeService";

export default function Dadjokes() {
  const [joke, setJoke] = useState('Click on the button to generate a Dad Joke')
  const generateJoke = async () => {
    try {
      const newJoke = await getDadJoke();
      setJoke(newJoke);
    } catch (error) {
      console.log(error);
      setJoke('Failed to get a joke, please try again!');
    }
  }

  return (
    <div className="container">
      <h1>Dad Joke Generator</h1>
      <div className="joke-container">
        <p>{joke}</p>
      </div>

      <div className="pushButton">
        <Button onClick={generateJoke} text="Generate" />
      </div>
    </div>
  );
}