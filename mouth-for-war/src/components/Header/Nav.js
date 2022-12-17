import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { MdShoppingBasket } from 'react-icons/md'

export default function Nav() {
  const { openCart, openMenu, checkout } = useContext(ShopContext)

  return (
    <nav>
      <ul>
        <li key="{home}">
          <Link className="navbar-links" to="/">
            Home
          </Link>
        </li>
        <li key="{merch}">
          <Link className="navbar-links" to="/merch">
            Merch
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
        <div id="cart-container">
        <li className="cart"><MdShoppingBasket onClick={() => openCart()} id="cart-icon"></MdShoppingBasket></li>
        </div>
      </ul>
    </nav>
  );
}
