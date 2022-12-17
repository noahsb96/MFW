import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/MFW-Pages/Home-Page/Home";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Tour from "./components/MFW-Pages/Tour-Page/Tour";
import About from "./components/MFW-Pages/About-Page/About";
import Music from "./components/MFW-Pages/Music-Page/Music";
import Videos from "./components/MFW-Pages/Videos-Page/Videos";
import Contact from "./components/MFW-Pages/Contact Page/Contact";
import ProductPage from "./components/MFW-Pages/ProductPage/ProductPage";

class App extends Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/tour" element={<Tour />} />
          <Route path="/about" element={<About />} />
          <Route path="/music" element={<Music />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/merch/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </>
    );
  }
}

export default App;
