import { useEffect, useState } from "react";
import API from "../services/api";

const statuses = ["PLACED", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"];

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const [message, setMessage] = useState("");

  const loadOrders = () => {
    API.get("/admin/orders").then((res) => setOrders(res.data));
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/admin/orders/${id}/status`, { status });
      setMessage("Order status updated");
      loadOrders();
    } catch (e) {
      setMessage(e.response?.data?.message || "Could not update order status");
    }
  };

  return (
    <div className="page-shell">
      <div className="container">
        <section className="section-heading compact-heading">
          <div>
            <h2>Manage Orders</h2>
            <p>Update fulfillment stages and monitor recent order activity.</p>
          </div>
        </section>
        {message && <div className="flash-message">{message}</div>}
        <div className="orders-grid admin-orders-grid">
          {orders.map((o) => (
            <div key={o.id} className="card order-card">
              <div className="order-top-row">
                <strong>Order #{o.id}</strong>
                <span className="badge">{o.status}</span>
              </div>
              <div className="order-line"><span>Total</span><strong>₹{o.total}</strong></div>
              <div className="order-line"><span>Address</span><span>{o.address}</span></div>
              <div className="order-line"><span>Created</span><span>{o.createdAt}</span></div>
              <div className="status-editor">
                <label>Status</label>
                <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value)}>
                  {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
