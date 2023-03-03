import React from "react";
import "../highlight/Highlight.scss"
import greekSalad from "../../../assets/greek-salad.png";
import bruchetta from "../../../assets/bruchetta.png";
import lemonDessert from "../../../assets/lemon-dessert.png";
import { MdDeliveryDining } from "react-icons/md"

const Highlight = () => {
  const data = [
    {
      food: "Greek Salad",
      price: "$12.55",
      detail:
        "The famous Greed Salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy  garlic and rosemary croutons.",
      image: greekSalad,
    },
    {
      food: "Bruschetta",
      price: "$5.99",
      detail:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      image: bruchetta,
    },
    {
      food: "Lemon Dessert",
      price: "$8.55",
      detail:
        "This comes straight from Grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      image: lemonDessert,
    },
  ];

  return (
    <section className="highlight">
      <div className="highlight__header">
        <h3>Specials</h3>
        <a href="/menu">Online Menu</a>
      </div>

      <div className="highlight__details">
        {data.map((data) => {
          return (
            <article className="menu">
              <img src={data.image} alt="Greek salad" />
              <div className="menu__header">
                <h2>{data.food}</h2>
                <p>{data.price}</p>
              </div>
              <p>{data.detail}</p>
              <a href="/order" target="_blank">
                Order a delivery&ensp;<MdDeliveryDining />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Highlight;
