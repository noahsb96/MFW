import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li key="{home}">
          <Link className="navbar-links" to="/">
            Home
          </Link>
        </li>
        <li key="{tour}">
          <Link className="navbar-links" to="/tour">
            Tour
          </Link>
        </li>
        <li key="{music}">
          <Link className="navbar-links" to="/music">
            Music
          </Link>
        </li>
        <li key="{about}">
          <Link className="navbar-links" to="/about">
            About
          </Link>
        </li>
        <li key="{videos}">
          <Link className="navbar-links" to="/videos">
            Videos
          </Link>
        </li>
        <li key="{contact}">
          <Link className="navbar-links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
