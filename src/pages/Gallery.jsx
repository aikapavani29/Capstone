import React from "react";

export default function Gallery() {
  return (
    <div className="site-container">
      <section className="gallery">
        <h2 className="section-title">our <span>gallery</span></h2>
        <div className="gallery-grid">
          <img src="/PHOTOS/Rings2.jpeg" alt="Rings" />
          <img src="/PHOTOS/together3.jpeg" alt="Together" />
          <img src="/PHOTOS/beautiful1.jpeg" alt="Beautiful" />
          <img src="/PHOTOS/engaged6.jpeg" alt="Engaged" />
        </div>
      </section>
    </div>
  );
}
