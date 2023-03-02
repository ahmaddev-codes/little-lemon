import React from "react";
import "../main/Main.scss";
import Image from "../../../assets/restaurantfood.jpg";

const Main = () => {
  return (
    <main className="main">
      <div className="main__content">
        <div className="main__content__header">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <p>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. The
          restaurant features a locally-sourced menu and with Daily specials.
        </p>
        <a href="/reserve">Reserve a Table</a>
      </div>

      <img src={Image} alt="main restaurant" />
    </main>
  );
};

export default Main;
