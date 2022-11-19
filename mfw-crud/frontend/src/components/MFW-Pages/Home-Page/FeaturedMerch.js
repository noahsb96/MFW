import React, { Component } from "react";
import { Link } from "react-router-dom";

export class FeaturedMerch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      merch: [],
    };
  }
  componentDidMount() {
    this.getMerch();
  }

  getMerch = () => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/`)
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({ merch: data.merch });
      });
  };

  render() {
    return (
      <div id="merch-container">
        <h1 id="merch-header">Merch</h1>
        <table id="home-table">
          <tbody id="merch-table">
            {this.state.merch.slice(0, 4).map((merch, index) => {
              return (
                <div id="merch-item">
                  <tr key={merch._id}>
                    <Link to={`/${merch._id}`}>
                      <img
                        width="300em"
                        height="300em"
                        src={merch.img}
                        id="merch-image"
                        alt="merch-pic"
                      ></img>
                    </Link>
                    <td id="home-merch-name">{merch.Name}</td>
                    <td id="home-merch-price">${merch.Price}</td>
                  </tr>
                </div>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FeaturedMerch;
