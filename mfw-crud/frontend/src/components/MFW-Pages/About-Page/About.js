import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <img
        src="https://i.imgur.com/MaLaboh.jpg"
        alt="about-pic"
        id="about-pic"
        width="100%"
      ></img>
      <div id="about-container">
        <h1 id="about-header">About Mouth for War</h1>
        <p id="about-p">
          Mouth for War are a five piece metal x hardcore band from Colorado.
          Formed in 2019 by members of Bruise and Remain and Sustain, the band
          hit the ground running with the release of their debut EP "An Ear Kept
          to the Ground" and multiple tours. Since then, the band has put out
          their first full length record, Life Cast In Glass. The band offers
          its own take on classic hardcore and metal, which sounds like Kickback
          and Sentence with a smooth modern twist of influences from Lamb of God
          and The Devil Wears Prada, etc.
        </p>
      </div>
      <Footer />
    </div>
  );
}
