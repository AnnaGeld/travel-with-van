import React from "react";
import aboutImg from "../img/about-main.jpg";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="about-container">
      <img alt="van" src={aboutImg} />
      <div className="about-details">
        <h2>Don't squeeze in a sedan when you could relax in a van.</h2>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="about-box">
          <h3>
            Your destination is waiting.
            <br />
            Your van is ready.
          </h3>
          <Link className="about-btn" to="/vans">
            Explore Our Vans
          </Link>
        </div>
      </div>
    </div>
  );
}
