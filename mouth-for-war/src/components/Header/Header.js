import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to={`/`}>
          <img width="200" src="https://ucd48d48aea958c1da8f99461523.previews.dropboxusercontent.com/p/thumb/ABuQ8b0kGuv0H20AfsypokO_PHy-E1H3frXpJU7CNiynndSE9Yh_5GJZ1YhSFnZbGkCd9qfsTOoGf0a9zhTAY-aQJMTBcC3jgdwfd_FOZ6mW2yky1_o4WwAF_RvXFjrtjRMi9K9oMI8kXnRgQ0a4KBLQ0nX6wrG2A-C2nzvkS_QrFa5dqdmQpSSENsqWtq9RaXTOSoA6UGuwHIDfcD5askTna0popDlVsEyQPz67e932GV3zmbU4BfSHRXci0oRW9BmRdKnZIFyVjQdoLgrFYoFQ0WDIKZVLCVPC_D00mU4GjpgXlsQ3JrvGtwQjTQsvpmlmYAsKX0vgOVfJ-h73xLfAwRcOlUz_n1Xbtw0Rs6MMtP2yY3er84kN4pf5clvtyrs/p.png" alt="logo"></img>
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
