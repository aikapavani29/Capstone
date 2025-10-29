import React, { useState } from "react";

export default function Checkout() {
  const [form, setForm] = useState({ name: "", email: "", date: "", notes: "" });
  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly to confirm your booking.");
  };

  return (
    <div className="site-container">
      <header className="header">
        <a href="/" className="logo"><span>Let's Celebrate </span>Together</a>
      </header>

      <main>
        <section className="price" style={{ maxWidth: 720 }}>
          <h2 className="section-title">Checkout</h2>
          <div className="price-card" style={{ width: "100%" }}>
            <h3>Booking Details</h3>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="row">
                <input name="name" value={form.name} onChange={onChange} placeholder="Full name" required />
                <input name="email" type="email" value={form.email} onChange={onChange} placeholder="Email" required />
              </div>
              <div className="row">
                <input name="date" type="date" value={form.date} onChange={onChange} placeholder="Event date" required />
                <input name="phone" type="tel" onChange={onChange} placeholder="Phone (optional)" />
              </div>
              <textarea name="notes" value={form.notes} onChange={onChange} rows={5} placeholder="Anything we should know?" />
              <button className="btn" type="submit">Confirm booking</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
