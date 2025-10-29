import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { hashPassword } from "../utils/hash";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trimStart(), // prevent leading spaces
    });
  };

const validatePassword = async (e) => {
    e.preventDefault(); // prevent form submission refresh

    const { password, confirm_password } = formData;

    if (password !== confirm_password) {
      setError("❌ Passwords do not match! Please try again.");
      return;
    }

    if (password.length < 8) {
      setError("❌ Password must be at least 8 characters long.");
      return;
    }

    // ✅ Use JSON Server API to persist user
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

    // Check duplicates by username or email
    const [byUsernameRes, byEmailRes] = await Promise.all([
      fetch(`${BASE_URL}/users?username=${encodeURIComponent(formData.username)}`),
      fetch(`${BASE_URL}/users?email=${encodeURIComponent(formData.email)}`),
    ]);
    const [byUsername, byEmail] = await Promise.all([
      byUsernameRes.json(),
      byEmailRes.json(),
    ]);

    if ((byUsername && byUsername.length > 0) || (byEmail && byEmail.length > 0)) {
      setError("❌ Username or email already exists!");
      return;
    }

    // Create user with hashed password
    const passwordHash = await hashPassword(formData.password);
    const createRes = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullname: formData.fullname,
        email: formData.email,
        username: formData.username,
        password: passwordHash,
        createdAt: new Date().toISOString(),
      }),
    });

    if (!createRes.ok) {
      setError("❌ Failed to create account. Try again.");
      return;
    }

    // Clear errors and redirect
    setError("");
    alert("✅ Account created successfully!");
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Sign Up</h2>
        <form onSubmit={validatePassword}>
          <div className="textbox">
            <input
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="textbox">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="textbox">
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="textbox">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="textbox">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <input type="submit" className="btn" value="Sign Up" />

          <div className="login-link">
            Already have an account?{" "}
            <a href="/login">Login Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
