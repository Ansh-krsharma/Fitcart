import { useContext, useState } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      login(res.data);
      navigate("/");
    } catch (e) {
      setMessage(e.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card split-card">
        <div className="split-copy dark-panel">
          <span className="hero-tag">Get started</span>
          <h2>Create your FitCart account</h2>
          <p>Join the storefront to explore products, manage carts, and place orders easily.</p>
        </div>
        <div className="split-form">
          <h3>Register</h3>
          {message && <div className="flash-message small">{message}</div>}
          <form onSubmit={handleSubmit}>
            <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="button primary-btn full-btn">Create account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
