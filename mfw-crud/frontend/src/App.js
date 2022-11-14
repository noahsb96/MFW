import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Show from "./components/Merch-Pages/Show";
import Edit from "./components/Merch-Pages/Edit-Page/Edit";
import NewMerch from "./components/Merch-Pages/New-Page/NewMerch";
import "./App.css";
import Register from "./User-Pages/Register";
import Signin from "./User-Pages/Signin";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<NewMerch />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/:id/edit" element={<Edit />} />
        </Routes>
      </>
    );
  }
}

export default App;
