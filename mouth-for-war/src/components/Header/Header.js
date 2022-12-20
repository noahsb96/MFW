import React, { Component } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

export class Header extends Component {
  render() {
    return (
      <header>
        <Link to={`/`}>
          <img
            width="200"
            src="https://ucd48d48aea958c1da8f99461523.previews.dropboxusercontent.com/p/thumb/ABzx1GQ4NLi6z6E4U4lEd2WvOYLn-i9M39LQF7nezbScWmNRHLZahl6UpJrJ65eJD-YVDomUm0UNFIYoivwJD3Kqajdx4UsxgMq2RgCjB1BIB-WufnTSmkcF_qTD2J60jFVm6a88EyjTh5UGHAObzY0H_ybs4MKnbxCzWOpwQ3l-koxAM-2L-IWWsd0RvGsu1HzZi8UyC-5EKk9o4sxyTF9QmIZgCgebFWlbO30gGELj-N4tZuP1gcaDvk2XjgFammCKLgG_es4id9Q7fhzQBKfuI4t9yrdNQe_HsvR0VK_fAyx2TmkM8BmrOf250kXZS4IslKc2j7WrSylNbOGaXlxqrBGrKVxA7pZyIPKEcj27HcUIshhVfmj6SkfOnsv6baE/p.png"
            alt="logo"
          ></img>
        </Link>
        <Nav />
      </header>
    );
  }
}

export default Header;
