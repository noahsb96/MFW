import React, { Component } from "react";
import Header from "./Header/Header";
import AllStudents from "./AllStudents";

export class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <AllStudents />
      </div>
    );
  }
}

export default Home;
