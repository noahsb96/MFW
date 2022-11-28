import React, { Component } from "react";
import AutosizeInput from "react-input-autosize";

export class NewMerch extends Component {
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

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/`, {
      method: "POST",
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
        window.location.href = window.location.href.split("new")[0];
      }
    });
  };

  render() {
    return (
      <div>
        <h1 id="edit-header">Create merch</h1>
        <form id="edit-form" onSubmit={this.handleSubmit}>
          <label htmlFor="studentName">Name: </label>
          <AutosizeInput
            type="text"
            id="Name"
            name="Name"
            placeholder="Merch Name"
            inputStyle={{ fontSize: 30 }}
            onChange={(e) => this.handleChange(e)}
            value={this.state.Name}
          />
          <label htmlFor="ClothingType">ClothingType: </label>
          <AutosizeInput
            type="text"
            id="ClothingType"
            name="ClothingType"
            placeholder="Clothing Type"
            inputStyle={{ fontSize: 30 }}
            onChange={(e) => this.handleChange(e)}
            value={this.state.ClothingType}
          />
          <label htmlFor="Price">Price: </label>
          <AutosizeInput
            type="number"
            id="Price"
            name="Price"
            inputStyle={{ fontSize: 30 }}
            onChange={(e) => this.handleChange(e)}
            value={this.state.Price}
          />
          <label htmlFor="Description">Description: </label>
          <AutosizeInput
            type="text"
            id="Description"
            name="Description"
            placeholder="Description"
            inputStyle={{ fontSize: 30 }}
            onChange={(e) => this.handleChange(e)}
            value={this.state.Description}
          />
          <label htmlFor="img">Image Link: </label>
          <AutosizeInput
            type="text"
            id="img"
            name="img"
            placeholder="Image Link"
            inputStyle={{ fontSize: 30 }}
            onChange={(e) => this.handleChange(e)}
            value={this.state.img}
          />
          <button id="stream-button">Add Merch</button>
        </form>
      </div>
    );
  }
}

export default NewMerch;
