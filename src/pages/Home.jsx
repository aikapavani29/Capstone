import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="site-container">
      <header className="header">
        <a href="/" className="logo"><span>Let's Celebrate </span>Together</a>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/about">About</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/pricing">Price</Link>
          <Link to="/reviews">Review</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-inner">
            <h1>Your Dream <span>Wedding</span> Starts Here</h1>
            <p className="lead">We make your celebrations magical — from venue to memories.</p>
            <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
              <Link className="btn" to="/services">Explore services</Link>
              <Link className="btn" to="/pricing">View pricing</Link>
            </div>
          </div>
          <div className="hero-image">
            <img src="/PHOTOS/decoration1.jpeg" alt="decoration" />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Branches</h4>
            <p>Mumbai · Jogeshwari · Goregaon · Navi Mumbai</p>
          </div>
          <div>
            <h4>Quick links</h4>
            <p>Home · Services · About · Gallery</p>
          </div>
          <div>
            <h4>Contact</h4>
            <p>+91 1234567891 · xyz@gmail.com</p>
          </div>
        </div>
        <div className="credit">created by <strong>Team 1</strong> | all rights reserved</div>
      </footer>
    </div>
  );
} 
