import React, { Component } from "react";
import Header from "./Header/Header";
import AllMerch from "./AllMerch";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <img
          src="https://i.imgur.com/n3jtS3U.jpg"
          alt="home-pic"
          id="home-pic"
          width="100%"
        ></img>
        <AllMerch />
      </div>
    );
  }
}

export default Home;
