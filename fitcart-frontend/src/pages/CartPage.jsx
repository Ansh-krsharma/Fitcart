import { useEffect, useMemo, useState } from "react";
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

  const total = useMemo(() => items.reduce((sum, i) => sum + i.product.price * i.quantity, 0), [items]);

  return (
    <div className="page-shell">
      <div className="container two-col-layout">
        <div>
          <section className="section-heading compact-heading">
            <div>
              <h2>Your cart</h2>
              <p>Review quantities, remove items, and continue to checkout.</p>
            </div>
          </section>

          {message && <div className="flash-message">{message}</div>}
          {items.length === 0 ? <div className="card empty-state">Your cart is empty.</div> : null}

          <div className="cart-stack">
            {items.map((i) => (
              <div key={i.id} className="card cart-card">
                <img src={i.product.imageUrl || "https://via.placeholder.com/180x140?text=FitCart"} alt={i.product.name} className="cart-image" />
                <div className="cart-content">
                  <h3>{i.product.name}</h3>
                  <p>{i.product.description}</p>
                  <div className="cart-meta-row">
                    <span>₹{i.product.price}</span>
                    <span>Available: {i.product.quantity}</span>
                  </div>
                </div>
                <div className="cart-actions-box">
                  <div className="qty-box fancy-qty-box">
                    <button onClick={() => updateQuantity(i.id, i.quantity - 1)}>-</button>
                    <span>{i.quantity}</span>
                    <button onClick={() => updateQuantity(i.id, i.quantity + 1)}>+</button>
                  </div>
                  <strong>₹{i.product.price * i.quantity}</strong>
                  <button className="button ghost-btn full-btn" onClick={() => removeItem(i.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <aside>
          <div className="card summary-card">
            <h3>Order summary</h3>
            <div className="summary-line"><span>Items</span><strong>{items.length}</strong></div>
            <div className="summary-line"><span>Subtotal</span><strong>₹{total}</strong></div>
            <div className="summary-line"><span>Delivery</span><strong>{items.length ? 'Free' : '—'}</strong></div>
            <div className="summary-line total-line"><span>Total</span><strong>₹{total}</strong></div>
            <button className="button primary-btn full-btn" disabled={!items.length} onClick={() => navigate("/checkout")}>Proceed to Checkout</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
