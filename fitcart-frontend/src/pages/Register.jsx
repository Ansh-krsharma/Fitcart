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
    <div className="container">
      <div className="card" style={{ maxWidth: "420px", margin: "0 auto" }}>
        <h2>Register</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="primary">Register</button>
        </form>
      </div>
    </div>
  );
}
