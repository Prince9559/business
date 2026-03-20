import React from "react";
import "./About.css";

function About() {
  return (
    <>

      <div className="about-banner">

        <video className="about-video" autoPlay muted loop>
          <source src="/pic/restaurant.mp4" type="video/mp4" />
        </video>

        <div className="about-overlay">
          <h1>About Our Restaurant 🍔</h1>
        </div>

      </div>


      <div className="container about-section">

        <h2>Delicious Food & Great Experience</h2>

        <p>
          Welcome to FoodHub, where taste meets quality. We serve a wide variety
          of delicious dishes prepared with fresh ingredients and expert chefs.
        </p>

        <p>
          Our goal is to provide a memorable dining experience with amazing
          flavors, fast service, and a comfortable environment for our customers.
        </p>

        <h2>Fresh Ingredients & Hygiene</h2>

        <p>
          We use only fresh and high-quality ingredients to prepare our meals.
          Cleanliness and hygiene are our top priorities in the kitchen.
        </p>

        <p>
          From preparation to serving, we maintain the highest standards to
          ensure the best food quality for our customers.
        </p>

        <h4>Our Specialities:</h4>

        <ul className="cert-list">
          <li>🍕 Fresh Pizza & Burgers</li>
          <li>🍔 Fast Food & Snacks</li>
          <li>🥤 Cold Drinks & Beverages</li>
          <li>🚚 Fast Home Delivery</li>
        </ul>

      </div>


      <div className="leadership container">

        <h2 className="text-center">Our Chefs 👨‍🍳</h2>

        <div className="leader-grid">

          <div className="leader-card">
            <img src="/pic/s.jpg" alt="Chef" />
            <h4>Chef Maria</h4>
            <p>Head Chef</p>
          </div>

          <div className="leader-card">
            <img src="/pic/ss.jpg" alt="Chef" />
            <h4>Chef John</h4>
            <p>Senior Chef</p>
          </div>

        </div>

      </div>
    </>
  );
}

export default About;