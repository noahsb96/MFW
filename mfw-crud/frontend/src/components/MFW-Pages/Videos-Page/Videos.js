import React, { Component } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Videos() {
  return (
    <div>
      <Header />
      <h1 id="video-header">Music Videos</h1>
      <div id="videos-container">
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/npNZeUozLT0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/6E2SZorHyHI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/95SNKPsoq5o"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/-XVdzMU4_vQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/YZJmqR3_Zhc"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <iframe
          width="1703"
          height="957"
          src="https://www.youtube.com/embed/kWJ5TukGG-c"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}
