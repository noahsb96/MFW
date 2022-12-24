import React from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/shopContext";
import { useContext } from "react";
import { MdShoppingBasket } from "react-icons/md";
import {
  Icon,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Nav() {
  const { openCart, checkout } = useContext(ShopContext);

  return (
    <nav>
      <ul>
        <li key="{home}">
          <Link className="navbar-links" to="/">
            Home
          </Link>
        </li>
        <Menu key="{merch}">
          <MenuButton
            colorScheme="black"
            pt="2"
            fontWeight="500"
            fontSize="2em"
            color="bisque"
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            Shop
          </MenuButton>
          <MenuList backgroundColor="black" color="bisque">
            <MenuItem backgroundColor="black">Download</MenuItem>
            <MenuItem backgroundColor="black">Create a Copy</MenuItem>
            <MenuItem backgroundColor="black">Mark as Draft</MenuItem>
            <MenuItem backgroundColor="black">Delete</MenuItem>
            <MenuItem backgroundColor="black">Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
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
        <Badge
          backgroundColor="black"
          textColor="red"
          fontSize="1.5em"
          ml=".5em"
          display="flex"
          alignItems="center"
        >
          {checkout.lineItems?.length}
        </Badge>
      </ul>
    </nav>
  );
}
