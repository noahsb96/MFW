import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Merch from "./components/Merch/Merch";
import Edit from "./components/Merch/Edit";
import NewMerch from "./components/Merch/NewMerch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewMerch />} />
          <Route path="/:id" element={<Merch />} />
          <Route path="/:id/edit" element={<Edit />} />
        </Routes>
      </>
    );
  }
}

export default App;
