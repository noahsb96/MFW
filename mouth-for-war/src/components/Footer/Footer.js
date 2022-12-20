import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to={`/`}>
          <img
            width="200"
            src="https://ucd48d48aea958c1da8f99461523.previews.dropboxusercontent.com/p/thumb/ABzx1GQ4NLi6z6E4U4lEd2WvOYLn-i9M39LQF7nezbScWmNRHLZahl6UpJrJ65eJD-YVDomUm0UNFIYoivwJD3Kqajdx4UsxgMq2RgCjB1BIB-WufnTSmkcF_qTD2J60jFVm6a88EyjTh5UGHAObzY0H_ybs4MKnbxCzWOpwQ3l-koxAM-2L-IWWsd0RvGsu1HzZi8UyC-5EKk9o4sxyTF9QmIZgCgebFWlbO30gGELj-N4tZuP1gcaDvk2XjgFammCKLgG_es4id9Q7fhzQBKfuI4t9yrdNQe_HsvR0VK_fAyx2TmkM8BmrOf250kXZS4IslKc2j7WrSylNbOGaXlxqrBGrKVxA7pZyIPKEcj27HcUIshhVfmj6SkfOnsv6baE/p.png"
            alt="logo"
          ></img>
        </Link>
        <div id="logos">
          <a href="https://www.facebook.com/mouthforwarco">
            <img
              width="50"
              height="50"
              src="https://www.freepnglogos.com/uploads/facebook-logo-icon/facebook-logo-icon-facebook-icon-png-images-icons-and-png-backgrounds-1.png"
              alt="facebook"
              id="logo"
            ></img>
          </a>
          <a href="https://twitter.com/mouthforwarco?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor">
            <img
              width="50"
              height="50"
              src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png"
              alt="twitter"
              id="logo"
            ></img>
          </a>
          <a href="https://www.instagram.com/mouthforwarco/?hl=en">
            <img
              width="50"
              height="50"
              src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png"
              alt="instagram"
              id="logo"
            ></img>
          </a>
          <a href="https://open.spotify.com/artist/2XWmtvXZ0FHiRT9PGzGPaF">
            <img
              width="50"
              height="50"
              src="https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png"
              alt="spotify"
              id="logo"
            ></img>
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
