import { useEffect, useState } from "react";
import API from "../services/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/my").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="container">
      <h2>My Orders</h2>
      {orders.length === 0 ? <p>No orders yet.</p> : null}
      {orders.map((o) => (
        <div key={o.id} className="card">
          <p><strong>Order ID:</strong> {o.id}</p>
          <p><strong>Total:</strong> ₹{o.total}</p>
          <p><strong>Status:</strong> {o.status}</p>
          <p><strong>Address:</strong> {o.address}</p>
          <p><strong>Created:</strong> {o.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
