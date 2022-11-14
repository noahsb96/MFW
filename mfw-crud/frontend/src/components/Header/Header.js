import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to={`/`}>
          <h1>Merch</h1>
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
