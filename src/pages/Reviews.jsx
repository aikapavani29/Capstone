import React from "react";

export default function Reviews() {
  return (
    <div className="site-container">
      <section className="review">
        <h2 className="section-title">client's <span>review</span></h2>
        <div className="review-list">
          <blockquote>
            
            <p>Our corporate event was a great success, thanks to your excellent planning!</p>
            <cite>— Leo</cite>
          </blockquote>
          <blockquote>
           
            <p>The event was fantastic! Everything went perfectly, and the food was delicious!</p>
            <cite>— Riya</cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
}
