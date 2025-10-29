import React from "react";

export default function Contact() {
  return (
    <div className="site-container">
      <section className="contact">
        <h2 className="section-title"><span>contact</span> us</h2>
        <form className="contact-form">
          <div className="row">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="row">
            <input type="tel" placeholder="Phone" />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Your message" rows="5"></textarea>
          <button type="submit" className="btn">Send message</button>
        </form>

        <p id="response-message" style={{ color: "green", fontWeight: "bold", textAlign: "center" }}></p>
      </section>
    </div>
  );
}
