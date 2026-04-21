import { useEffect, useState } from "react";
import API from "../services/api";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    API.get("/orders/my").then((res) => setOrders(res.data));
  }, []);

  return (
    <div className="page-shell">
      <div className="container">
        <section className="section-heading compact-heading">
          <div>
            <h2>My Orders</h2>
            <p>Track placed orders and monitor their status.</p>
          </div>
        </section>
        {orders.length === 0 ? <div className="card empty-state">No orders yet.</div> : null}
        <div className="orders-grid">
          {orders.map((o) => (
            <div key={o.id} className="card order-card">
              <div className="order-top-row">
                <strong>Order #{o.id}</strong>
                <span className="badge">{o.status}</span>
              </div>
              <div className="order-line"><span>Total</span><strong>₹{o.total}</strong></div>
              <div className="order-line"><span>Address</span><span>{o.address}</span></div>
              <div className="order-line"><span>Created</span><span>{o.createdAt}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
