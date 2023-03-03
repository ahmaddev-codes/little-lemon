import React from "react";
import "../../homepage/testimonial/Testimonial.scss";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";
import user4 from "../../../assets/user4.png";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";


const Testimonial = () => {
  const testimonials = [
    {
      name: "Jeffrey",
      image: user1,
      testimonial:
        "I had the grilled salmon and it was cooked to perfection. The service was top-notch too. Highly recommend!",
    },
    {
      name: "Zurich",
      image: user2,
      testimonial:
        "What a hidden gem! This neighborhood bistro has an incredible menu and the staff are so welcoming.",
    },
    {
      name: "Jessica",
      image: user3,
      testimonial:
        "This is my go-to spot for date night. The cozy atmosphere and delicious food make for the perfect evening out.",
    },
    {
      name: "Anne",
      image: user4,
      testimonial:
        "I can't say enough good things about this neighborhood bistro. The food is flavorful, and the wine selection is fantastic.",
    },
  ];

  return (
    <section className="testimonial">
      <h2>Testimonials</h2>
      <div className="users">
        {testimonials.map((users) => {
          return (
            <div className="user">
              <img src={users.image} alt="user 1" />
              <div className="rating">
                <h3>{users.name}</h3>
                <div className="rating__number">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <FaStarHalfAlt />
                </div>
              </div>
              <p>{users.testimonial}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
