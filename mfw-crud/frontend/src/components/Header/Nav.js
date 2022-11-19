import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Nav() {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies([]);
  const signOut = () => {
    removeCookie("jwt");
    navigate("/Signin");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link className="navbar-links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to="/tour">
            Tour
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to="/new">
            New Merch
          </Link>
        </li>
        <li>
          <Link className="navbar-links" to="/about">
            About
          </Link>
        </li>
        <li>
          <button className="navbar-links" onClick={signOut}>
            Log Out
          </button>{" "}
        </li>
      </ul>
    </nav>
  );
}
