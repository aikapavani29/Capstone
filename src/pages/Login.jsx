import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import { hashPassword } from "../utils/hash";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trimStart(),
    });
  };

const handleSubmit = async (e) => {
    e.preventDefault();

    const { username, password } = formData;

    // Simple front-end validation
    if (!username || !password) {
      setError("❌ Please fill in both fields.");
      return;
    }

    // Check credentials against API
    const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";
    // Find by username only, then verify password hash client-side
    const res = await fetch(
      `${BASE_URL}/users?username=${encodeURIComponent(username)}`
    );
    const matches = await res.json();

    if (!Array.isArray(matches) || matches.length === 0) {
      setError("❌ Invalid username or password.");
      return;
    }

    const user = matches[0];
    const inputHash = await hashPassword(password);
    if (user.password !== inputHash) {
      setError("❌ Invalid username or password.");
      return;
    }

    // Login successful
    const { password: _, ...publicUser } = user;
    localStorage.setItem("currentUser", JSON.stringify(publicUser));
    window.dispatchEvent(new Event("auth-changed"));
    setError("");
    alert("✅ Login successful!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
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

          {error && <div className="error-message">{error}</div>}

          <input type="submit" className="btn" value="Login" />

          <div className="signup-link">
            Don’t have an account?{" "}
            <a href="/signup">Sign Up Here</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
