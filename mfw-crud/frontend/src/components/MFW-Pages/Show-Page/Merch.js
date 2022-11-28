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
      img: "",
    };
  }
  componentDidMount() {
    const { id } = this.props.params;
    this.getMerch(id);
  }

  getMerch = (id) => {
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/${id}`)
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
          img: data.merch.img,
        });
      });
  };

  handleDelete = () => {
    const { id } = this.props.params;
    fetch(
      `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/${this.state.MerchId}`,
      {
        method: "DELETE",
      }
    ).then((response) => {
      if (response.status === 200) {
        window.location.href = window.location.href.split(id)[0];
      }
    });
  };

  render() {
    return (
      <>
        <div id="show-container">
          <img
            src={this.state.img}
            alt="show-pic"
            width="600"
            id="show-pic"
          ></img>
          <table>
            <tbody>
              <tr>
                <div id="show-item">
                  <h1 id="show-header">{this.state.Name}</h1>
                  <td id="show-td">${this.state.Price}</td>
                  <td id="show-td">Shipping Calculated at Checkout</td>
                  <div id="crud-btns">
                    <Link id="edit" to={`/${this.props.params.id}/edit`}>
                      Edit
                    </Link>
                    <Link id="delete" onClick={this.handleDelete} to={`/`}>
                      Delete
                    </Link>
                    <Link to="/new">
                      New Merch
                    </Link>
                  </div>
                </div>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

export default withParams(Merch);
