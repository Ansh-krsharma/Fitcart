import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CheckoutPage() {
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const placeOrder = async () => {
    try {
      await API.post("/orders/checkout", { address });
      navigate("/orders");
    } catch (e) {
      setMessage(e.response?.data?.message || "Could not place order");
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-card split-card">
        <div className="split-copy dark-panel">
          <span className="hero-tag">Secure checkout</span>
          <h2>Confirm delivery details</h2>
          <p>Enter the shipping address to place your FitCart order.</p>
        </div>
        <div className="split-form">
          <h3>Delivery address</h3>
          {message && <div className="flash-message small">{message}</div>}
          <textarea
            rows="7"
            placeholder="Enter full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button className="button primary-btn full-btn" onClick={placeOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
}
