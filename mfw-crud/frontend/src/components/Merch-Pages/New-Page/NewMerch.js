import React, { Component } from "react";

export class NewMerch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Sizes: [],
      clothingType: "",
      Price: 0,
      Description: "",
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
        <h1>Create merch</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="studentName">Name: </label>
          <input
            type="text"
            id="Name"
            name="Name"
            onChange={(e) => this.handleChange(e)}
            value={this.state.Name}
          />
          <label htmlFor="ClothingType">ClothingType: </label>
          <input
            type="text"
            id="ClothingType"
            name="ClothingType"
            onChange={(e) => this.handleChange(e)}
            value={this.state.ClothingType}
          />
          <label htmlFor="Price">Price: </label>
          <input
            type="number"
            id="Price"
            name="Price"
            onChange={(e) => this.handleChange(e)}
            value={this.state.Price}
          />
          <label htmlFor="Description">Description: </label>
          <input
            type="text"
            id="Description"
            name="Description"
            onChange={(e) => this.handleChange(e)}
            value={this.state.Description}
          />
          <button>Add Merch</button>
        </form>
      </div>
    );
  }
}

export default NewMerch;
