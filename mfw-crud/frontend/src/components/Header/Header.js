import React, { Component } from "react";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    return (
      <header>
        <h1>Merch</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
