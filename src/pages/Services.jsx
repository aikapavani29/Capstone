import React from "react";

export default function Services() {
  return (
    <div className="site-container">
      <section className="service">
        <h2 className="section-title">our <span>services</span></h2>
        <div className="box-grid">
          <div className="box">
            <h3>Venue Selection</h3>
            <p>Find the perfect venue for your special day.</p>
          </div>
          <div className="box">
            <h3>Invitation Cards</h3>
            <p>Custom invitation cards for every occasion.</p>
          </div>
          <div className="box">
            <h3>Entertainment</h3>
            <p>Live music and entertainment to keep the party going.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
