import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthBar() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("currentUser"));
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    function handleChange() {
      try {
        setUser(JSON.parse(localStorage.getItem("currentUser")));
      } catch {
        setUser(null);
      }
    }
    window.addEventListener("storage", handleChange);
    window.addEventListener("auth-changed", handleChange);
    return () => {
      window.removeEventListener("storage", handleChange);
      window.removeEventListener("auth-changed", handleChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("currentUser");
    window.dispatchEvent(new Event("auth-changed"));
    navigate("/login");
  };

  if (!user) return null;

  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "8px 12px",
      background: "#f5f5f5",
      borderBottom: "1px solid #e5e5e5",
      fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    }}>
      <div>
        Signed in as <strong>{user.fullname || user.username}</strong>
      </div>
      <button onClick={logout} style={{
        appearance: "none",
        border: "1px solid #ccc",
        background: "white",
        padding: "6px 10px",
        borderRadius: 6,
        cursor: "pointer"
      }}>
        Logout
      </button>
    </div>
  );
}
