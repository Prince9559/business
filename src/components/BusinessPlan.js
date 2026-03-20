import React from "react";
import "./BusinessPlan.css";

function BusinessPlan() {
  return (
    <div className="business-banner">

       
      <video className="business-video" autoPlay muted loop>
        <source src="/pic/business.mp4" type="video/mp4" />
      </video>

       
      <div className="business-overlay">
        <div className="business-container">
          <h2>Our Restaurant Business Plan 🍴</h2>

          <p>
            Welcome to FoodHub! Our restaurant focuses on providing delicious and
            freshly prepared food with exceptional service. Here’s a snapshot of
            our business plan:
          </p>

          <div className="plan-details">
            <div className="plan-item">
              <h4>Initial Investment</h4>
              <p>₹50,000 – for kitchen setup, ingredients, and marketing</p>
            </div>

            <div className="plan-item">
              <h4>Expected Monthly Revenue</h4>
              <p>₹70,000 – based on dine-in and delivery orders</p>
            </div>

            <div className="plan-item">
              <h4>Expected Profit</h4>
              <p>₹20,000/month – after operational costs</p>
            </div>

            <div className="plan-item">
              <h4>Target Audience</h4>
              <p>Families, students, and office-goers looking for quality meals</p>
            </div>

            <div className="plan-item">
              <h4>Special Offerings</h4>
              <p>Fast delivery, combo meals, healthy options, and desserts</p>
            </div>
          </div>

          <p className="note">
            Our aim is to grow steadily by maintaining quality, hygiene, and
            customer satisfaction at the core of our operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BusinessPlan;