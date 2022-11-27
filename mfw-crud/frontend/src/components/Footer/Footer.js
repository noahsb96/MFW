import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Link to={`/`}>
          <img
            width="200"
            src="https://ucd48d48aea958c1da8f99461523.previews.dropboxusercontent.com/p/thumb/ABuQ8b0kGuv0H20AfsypokO_PHy-E1H3frXpJU7CNiynndSE9Yh_5GJZ1YhSFnZbGkCd9qfsTOoGf0a9zhTAY-aQJMTBcC3jgdwfd_FOZ6mW2yky1_o4WwAF_RvXFjrtjRMi9K9oMI8kXnRgQ0a4KBLQ0nX6wrG2A-C2nzvkS_QrFa5dqdmQpSSENsqWtq9RaXTOSoA6UGuwHIDfcD5askTna0popDlVsEyQPz67e932GV3zmbU4BfSHRXci0oRW9BmRdKnZIFyVjQdoLgrFYoFQ0WDIKZVLCVPC_D00mU4GjpgXlsQ3JrvGtwQjTQsvpmlmYAsKX0vgOVfJ-h73xLfAwRcOlUz_n1Xbtw0Rs6MMtP2yY3er84kN4pf5clvtyrs/p.png"
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
