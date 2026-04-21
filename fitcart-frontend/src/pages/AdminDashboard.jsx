import { useEffect, useState } from "react";
import API from "../services/api";

function StatCard({ title, value, subtitle }) {
  return (
    <div className="stat-card polished-stat-card">
      <span>{title}</span>
      <strong>{value}</strong>
      <small>{subtitle}</small>
      <div className="stat-progress"><span /></div>
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({});

  useEffect(() => {
    API.get("/admin/dashboard").then((res) => setStats(res.data));
  }, []);

  return (
    <div className="page-shell">
      <div className="container">
        <section className="section-heading">
          <div>
            <h2>FitCart Dashboard</h2>
            <p>Store overview, growth signals, and quick admin insights.</p>
          </div>
          <span className="badge">Admin workspace</span>
        </section>

        <div className="stats-grid">
          <StatCard title="Total Products" value={stats.totalProducts || 0} subtitle="Catalog inventory count" />
          <StatCard title="Total Orders" value={stats.totalOrders || 0} subtitle="Orders placed so far" />
          <StatCard title="Total Users" value={stats.totalUsers || 0} subtitle="Registered customers" />
          <StatCard title="Revenue" value={`₹${stats.totalRevenue || 0}`} subtitle="Lifetime store revenue" />
        </div>

        <div className="row dashboard-panels">
          <div className="card dashboard-card dark-panel">
            <h3>Dashboard preview</h3>
            <p>Get a quick snapshot of store's performance and key metrics at a glance.</p>
          </div>
          <div className="card dashboard-card">
            <h3>Quick actions</h3>
            <ul className="clean-list">
              <li>Add or update products from the products page</li>
              <li>Review orders and update statuses</li>
              <li>Track stock and expand the product catalog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
