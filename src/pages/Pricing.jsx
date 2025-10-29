import React from "react";
import { Link } from "react-router-dom";

export default function Pricing() {
  return (
    <div className="site-container">
      <section className="price">
        <h2 className="section-title">our <span>price</span></h2>
        <div className="price-card">
          <h3>For Weddings</h3>
          <img src="/PHOTOS/maing3.jpeg" alt="Wedding" />
          <p className="amount">₹30,00,000</p>
          <ul>
            <li>Full services</li>
            <li>Decorations</li>
            <li>Music and photos</li>
            <li>Food and drinks</li>
          </ul>
          <Link to="/checkout" className="btn">Check out</Link>
        </div>
        <div className="price-card">
          <h3>For Weddings</h3>
          <img src="/PHOTOS/Memorable.jpeg" alt="Memorable" />
          <p className="amount">₹5,00,000-10,00,000</p>
          <ul>
            <li>Full services</li>
            <li>Decorations</li>
            <li>Music and photos</li>
            <li>Food and drinks</li>
          </ul>
          <Link to="/checkout" className="btn">Check out</Link>
        </div>
        <div className="price-card">
          <h3>For Birthdays</h3>
          <img src="/PHOTOS/deco.jpeg" alt="Birthday" />
          <p className="amount">₹2,00,000-3,00,000</p>
          <ul>
            <li>Full services</li>
            <li>Decorations</li>
            <li>Music and photos</li>
            <li>Food and drinks</li>
          </ul>
          <Link to="/checkout" className="btn">Check out</Link>
        </div>
        <div className="price-card">
          <h3>For Functions</h3>
          <img src="/PHOTOS/decoration1.jpeg" alt="Functions" />
          <p className="amount">₹30,00,000-40,00,000</p>
          <ul>
            <li>Full services</li>
            <li>Decorations</li>
            <li>Music and photos</li>
            <li>Food and drinks</li>
          </ul>
          <Link to="/checkout" className="btn">Check out</Link>
        </div>
      </section>
    </div>
  );
}
