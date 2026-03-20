import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

         
        <div className="footer-column">
          <h3>FoodHub 🍔</h3>
          <p>
            FoodHub is a modern food business concept that delivers delicious,
            hygienic, and affordable meals. Our mission is to provide quality
            food with fast service.
          </p>

          <p>© FoodHub 2026, All Rights Reserved</p>
        </div>

         
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/businessplan">Business Plan</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

         
        <div className="footer-column">
          <h4>Popular Items</h4>
          <ul>
            <li>Burger 🍔</li>
            <li>Pizza 🍕</li>
            <li>Momos 🥟</li>
            <li>Cold Coffee ☕</li>
            <li>French Fries 🍟</li>
            <li>Sandwich 🥪</li>
          </ul>
        </div>

         
        <div className="footer-column">
          <h4>Contact Us</h4>

          <p>📍 Varanasi, Uttar Pradesh</p>
          <p>📞 +91 9559618602</p>
          <p>✉ foodhub@gmail.com</p>

          <a
            href="https://wa.me/919559618602"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn">
            Order on WhatsApp
          </a>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Refund Policy</li>
        </ul>
      </div>
    </footer>
  );
}