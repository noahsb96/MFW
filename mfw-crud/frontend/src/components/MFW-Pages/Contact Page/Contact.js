import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Contact() {
  return (
    <div>
      <Header />
      <img
        src="https://i.imgur.com/GzXsVjO.jpg"
        alt="about-pic"
        id="about-pic"
        width="100%"
      ></img>
      <h1 id="contact-header">Contact Us</h1>
      <div id="contact-container">
        <div id="contact-item">
          <a href="mailto:danieldefonce@tkoco.com">
            <h2>Booking</h2>
            <h3>TKO Booking:</h3>
            danieldefonce@tkoco.com
          </a>
        </div>
        <div id="contact-item">
          <a href="https://1126records.com/">
            <h2>Label</h2>
            <h3>1126 Records</h3>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
