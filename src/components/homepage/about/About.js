import React from "react";
import '../../homepage/about/About.scss';
import owner1 from '../../../assets/owner1.png';
import owner2 from '../../../assets/owner2.png';

const About = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="header">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
        </div>
        <p>
          Little Lemon is a charming neighborhood bistro
          that serves simple food and classic cocktails
          in a lively but casual environment.
          The restaurant features a locally-sourced menu
          with Daily specials.
        </p>
      </div>
      <div className="about__image">
        <img src={owner1} alt="owner 1" />
        <img src={owner2} alt="owner 2" />
      </div>
    </section>
  );
};

export default About;
