import React, { Component } from "react";
import Header from "../Header/Header";

export class Merch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      MerchId: "",
      Name: "",
      Sizes: [],
      clothingType: "",
      Price: 0,
      Description: "",
    };
  }
  componentDidMount() {
    this.getMerchId();
    this.getMerch();
  }

  componentDidUpdate() {
    this.getMerch();
  }

  getMerchId = () => {
    this.setState({
      MerchId:
        window.location.href.split("/")[
          window.location.href.split("/").length - 1
        ],
    });
  };

  getMerch = () => {
    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/${this.state.MerchId}`
    )
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
        this.setState({
          Name: data.merch.Name,
          Sizes: data.merch.Sizes,
          clothingType: data.merch.clothingType,
          Price: data.merch.Price,
          Description: data.merch.Description,
        });
      });
  };

  render() {
    return (
      <>
        <Header />
        <div>
          <h1>{this.state.Name}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>ClothingType</h3> {this.state.clothingType}
                </td>
                <td>
                  <h3>Description</h3> {this.state.Description}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default Merch;
