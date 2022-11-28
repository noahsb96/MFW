import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Music() {
  return (
    <div>
      <Header />
      <img
        src="https://i.imgur.com/jDBCJ8a.jpg"
        alt="about-pic"
        id="about-pic"
        width="100%"
      ></img>
      <h1 id="album-header">Releases</h1>
      <div id="album-container">
        <div id="album-info">
          <a href="https://open.spotify.com/album/6i3TANvFPedJYTtArFAcnJ?si=90JY6JmjSo2NG0iADYOzVg">
            <img
              id="album-pic"
              src="https://is2-ssl.mzstatic.com/image/thumb/Music112/v4/90/ca/54/90ca548b-c329-0b04-b2be-3375b70e5521/196925048972.jpg/600x600bb.jpg"
            ></img>
          </a>
          <p id="album-text">Reshaped</p>
          <p id="album-text">2022</p>
          <a href="https://open.spotify.com/album/6i3TANvFPedJYTtArFAcnJ?si=zAFZn2tFTiubrjH7ySeIbg">
            <button id="stream-button">Stream</button>
          </a>
        </div>
        <div id="album-info">
          <a href="https://open.spotify.com/album/1X9OirFVMhj4mQujvrx8v1?si=_4sC6G9ASNKvNuyEICd4dg">
            <img
              id="album-pic"
              src="https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/56/72/0d/56720df8-5e34-0b6c-d228-731502e6fb61/196006217549.jpg/600x600bb.jpg"
            ></img>
          </a>
          <p id="album-text">Life Cast In Glass</p>
          <p id="album-text">2021</p>
          <a href="https://open.spotify.com/album/1X9OirFVMhj4mQujvrx8v1?si=_4sC6G9ASNKvNuyEICd4dg">
            <button id="stream-button">Stream</button>
          </a>
        </div>
        <div id="album-info">
          <a href="https://open.spotify.com/album/3sCYtlN6Mj3Mh6legWamrG?si=nFbEfhPHRh6Y28lrATeYyg">
            <img
              id="album-pic"
              src="https://is2-ssl.mzstatic.com/image/thumb/Music113/v4/49/a6/83/49a6831e-e7b6-52dd-5b55-9ce9aa5362fc/5059366073734_cover.jpg/600x600bb.jpg"
            ></img>
          </a>
          <p id="album-text">An Ear Kept To The Ground</p>
          <p id="album-text">2019</p>
          <a href="https://open.spotify.com/album/3sCYtlN6Mj3Mh6legWamrG?si=nFbEfhPHRh6Y28lrATeYyg">
            <button id="stream-button">Stream</button>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
