import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

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
          ClothingType: data.merch.ClothingType,
          Price: data.merch.Price,
          Description: data.merch.Description,
        });
      });
  };

  render() {
    return (
      <>
        <div>
          <h1>{this.state.Name}</h1>
          <table>
            <tbody>
              <tr>
                <td>
                  <h3>ClothingType</h3> {this.state.ClothingType}
                </td>
                <td>
                  <h3>Description</h3> {this.state.Description}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="redirect">
            <Link to={`/${this.props.params.id}/edit`}>Edit</Link>
          </div>
        </div>
      </>
    );
  }
}

export default withParams(Merch);
