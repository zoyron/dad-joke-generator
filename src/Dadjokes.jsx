import React from "react";
import Button from "./Button";

export default function Dadjokes() {
  return <>
    <Button onClick={generateJoke} text="Generate" />
  </>
}