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
      setMessage(e.response?.data?.message || "Checkout failed");
    }
  };

  return (
    <div className="container">
      <div className="card">
        <h2>Checkout</h2>
        {message && <p>{message}</p>}
        <textarea
          placeholder="Enter delivery address"
          rows="5"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button className="primary" onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}
