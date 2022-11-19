import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/MFW-Pages/Home-Page/Home";
import Show from "./components/MFW-Pages/Show-Page/Show";
import Edit from "./components/MFW-Pages/Edit-Page/Edit";
import New from "./components/MFW-Pages/New-Page/New";
import "./App.css";
import Register from "./User-Pages/Register";
import Signin from "./User-Pages/Signin";
import "react-toastify/dist/ReactToastify.css";
import Tour from "./components/MFW-Pages/Tour-Page/Tour";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/:id" element={<Show />} />
          <Route path="/:id/edit" element={<Edit />} />
          <Route path="/tour" element={<Tour />} />
        </Routes>
      </>
    );
  }
}

export default App;
