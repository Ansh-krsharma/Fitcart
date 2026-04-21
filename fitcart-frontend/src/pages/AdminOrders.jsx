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
    <div className="container">
      <h2>All Orders</h2>
      {message && <p>{message}</p>}
      {orders.map((o) => (
        <div key={o.id} className="card">
          <p><strong>Order #</strong> {o.id}</p>
          <p>Total: ₹{o.total}</p>
          <p>Address: {o.address}</p>
          <p>Created: {o.createdAt}</p>
          <div className="inline-actions">
            <strong>Status:</strong>
            <select value={o.status} onChange={(e) => updateStatus(o.id, e.target.value)}>
              {statuses.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      ))}
    </div>
  );
}
