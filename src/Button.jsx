import React from "react";

export default function Button({ onclick, text }) {
  return <button onClick={onClick}>
    {text}
  </button>
}