import { useEffect, useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [items, setItems] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const loadCart = () => {
    API.get("/cart")
      .then((res) => setItems(res.data))
      .catch((e) => setMessage(e.response?.data?.message || "Could not load cart"));
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (id) => {
    await API.delete(`/cart/${id}`);
    loadCart();
  };

  const updateQuantity = async (id, quantity) => {
    if (quantity < 1) return;
    try {
      await API.put(`/cart/${id}`, { quantity });
      loadCart();
    } catch (e) {
      setMessage(e.response?.data?.message || "Could not update quantity");
    }
  };

  const total = items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  return (
    <div className="container">
      <h2>My Cart</h2>
      {message && <p>{message}</p>}
      {items.length === 0 ? <p>Your cart is empty.</p> : null}
      {items.map((i) => (
        <div key={i.id} className="card cart-row">
          <div>
            <h3>{i.product.name}</h3>
            <p>Price: ₹{i.product.price}</p>
            <p>Available: {i.product.quantity}</p>
          </div>
          <div className="qty-box">
            <button onClick={() => updateQuantity(i.id, i.quantity - 1)}>-</button>
            <span>{i.quantity}</span>
            <button onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</button>
          </div>
          <div>
            <p><strong>₹{i.product.price * i.quantity}</strong></p>
            <button className="danger" onClick={() => removeItem(i.id)}>Remove</button>
          </div>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
      {items.length > 0 && <button className="primary" onClick={() => navigate("/checkout")}>Proceed to Checkout</button>}
    </div>
  );
}
