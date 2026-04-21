import { useContext, useState } from "react";
import API from "../services/api";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      login(res.data);
      navigate("/");
    } catch (e) {
      setMessage(e.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card split-card">
        <div className="split-copy">
          <span className="hero-tag">Welcome back</span>
          <h2>Login to your FitCart account</h2>
          <p>Access your cart, track orders, and continue your fitness shopping journey.</p>
        </div>
        <div className="split-form">
          <h3>Sign in</h3>
          {message && <div className="flash-message small">{message}</div>}
          <form onSubmit={handleSubmit}>
            <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            <button className="button primary-btn full-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
