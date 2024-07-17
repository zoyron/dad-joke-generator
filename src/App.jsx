import React from "react";
import DadJokes from "./Dadjokes";
import Footer from "./Footer";

export default function App() {

  return (
    <>
      <div className="container">
        <DadJokes />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}