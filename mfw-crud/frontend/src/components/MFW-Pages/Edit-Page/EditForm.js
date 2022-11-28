import React, { Component } from "react";
import { useParams } from "react-router-dom";
import AutosizeInput from "react-input-autosize";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

export class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { id } = this.props.params;
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        Name: this.state.Name,
        Sizes: this.state.Sizes,
        ClothingType: this.state.ClothingType,
        Price: this.state.Price,
        Description: this.state.Description,
        img: this.state.img,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      if (response.status === 200) {
        window.location.href = window.location.href.split("edit")[0];
      }
    });
  };

  render() {
    return (
      <div>
        <h1 id="edit-header">Edit {this.state.Name}</h1>
        <form id="edit-form" onSubmit={this.handleSubmit}>
          <label htmlFor="studentName">Name: </label>
          <AutosizeInput
            type="text"
            id="Name"
            name="Name"
            placeholder="Name"
            inputStyle={{ fontSize: 30 }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.Name}
          />
          <label htmlFor="ClothingType">ClothingType: </label>
          <AutosizeInput
            type="text"
            id="ClothingType"
            name="ClothingType"
            placeholder="Clothing Type"
            inputStyle={{ fontSize: 30 }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.ClothingType}
          />
          <label htmlFor="Price">Price: </label>
          <AutosizeInput
            type="number"
            id="Price"
            name="Price"
            inputStyle={{ fontSize: 30 }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.Price}
          />
          <label htmlFor="Description">Description: </label>
          <AutosizeInput
            type="text"
            id="Description"
            name="Description"
            placeholder="Description"
            inputStyle={{ fontSize: 30 }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.Description}
          />
          <label htmlFor="img">Image Link: </label>
          <AutosizeInput
            type="text"
            id="img"
            name="img"
            placeholder="Image Link"
            inputStyle={{ fontSize: 30 }}
            onChange={(event) => this.handleChange(event)}
            value={this.state.img}
          />
          <button id="stream-button">Submit your changes</button>
        </form>
      </div>
    );
  }
}

export default withParams(EditForm);
