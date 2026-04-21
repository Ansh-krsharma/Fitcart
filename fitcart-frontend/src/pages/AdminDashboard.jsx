import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/admin/dashboard").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div className="row">
        <div className="card"><h3>Products</h3><p>{stats.totalProducts || 0}</p></div>
        <div className="card"><h3>Orders</h3><p>{stats.totalOrders || 0}</p></div>
        <div className="card"><h3>Users</h3><p>{stats.totalUsers || 0}</p></div>
        <div className="card"><h3>Revenue</h3><p>₹{stats.totalRevenue || 0}</p></div>
      </div>
    </div>
  );
}
