import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-banner">
        Contact FoodHub 🍔
      </div>

      <div className="contact-info container">

        <div className="contact-details">
          <h3>Our Restaurant</h3>

          <p>
            123 Food Street,<br/>
            Downtown,<br/>
            Varanasi, India
          </p>

          <p>📞 +91 9559618602</p>
          <p>✉ contact@foodhub.com</p>
        </div>

        <div className="contact-map">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Varanasi,India&output=embed"
            width="300"
            height="220"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>

      <div className="contact-form container">

        <h3>Send Us a Message</h3>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Write your message here..." required></textarea>
          <button type="submit">Submit</button>
        </form>

      </div>

    </div>
  );
}

export default Contact;