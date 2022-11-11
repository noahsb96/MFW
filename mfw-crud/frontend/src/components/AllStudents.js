import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AllMerch extends Component {
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
    console.log("hey what is in my state?", this.state.merch);
    return (
      <div>
        <h1>Merch</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ClothingType</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.state.merch.map((merch) => {
              return (
                <tr key={merch._id}>
                  <td>
                    <Link to={`/${merch._id}`}>{merch.Name}</Link>
                  </td>
                  <td> {merch.clothingType}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default AllMerch;
