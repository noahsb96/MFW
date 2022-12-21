import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { Text, Icon, Image, Badge, Box } from "@chakra-ui/react";

export default function Nav() {
  const { openCart, openMenu, checkout } = useContext(ShopContext);

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
        <Icon
          fill="bisque"
          as={MdShoppingBasket}
          w={38}
          h={38}
          cursor="pointer"
          onClick={() => openCart()}
          ml={200}
        />
        <Badge backgroundColor="black" textColor="red" fontSize="1.5em" ml=".5em" display="flex" alignItems="center">{checkout.lineItems?.length}</Badge>
      </ul>
    </nav>
  );
}
