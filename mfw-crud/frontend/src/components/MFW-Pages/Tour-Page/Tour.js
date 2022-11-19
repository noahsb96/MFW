import React from "react";
import Header from "../../Header/Header";
import TourDates from "./TourDates";

const Tour = () => {
  return (
    <div>
      <Header />
      <img
        alt="tour-pic"
        id="tour-pic"
        width="100%"
        src="https://i.imgur.com/38nDD7w.jpg"
      ></img>
      <TourDates />
    </div>
  );
};

export default Tour;