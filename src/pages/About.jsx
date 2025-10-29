import React from "react";

export default function About() {
  return (
    <div className="site-container">
      <header className="header">
        <a href="/" className="logo"><span>Let's Celebrate </span>Together</a>
      </header>

      <main>
        <section className="about" id="about">
          <h2 className="section-title"><span>about</span> us</h2>
          <div className="about-row">
            <img src="/PHOTOS/engaged6.jpeg" alt="About us" className="about-image" />
            <div>
              <h3>We craft unforgettable celebrations</h3>
              <p>
                From intimate gatherings to grand weddings, our team handles planning,
                design, vendor management, and on-the-day coordination. We focus on the
                details so you can focus on the joy.
              </p>
              <ul>
                <li>End-to-end event planning</li>
                <li>Custom design and decor</li>
                <li>Entertainment and photography</li>
                <li>Curated food and beverages</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
