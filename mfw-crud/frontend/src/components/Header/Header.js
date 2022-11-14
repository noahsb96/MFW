import React, { Component } from "react";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    return (
      <header>
        <Nav />
        <h1>Merch</h1>
      </header>
    );
  }
}

export default Header;
