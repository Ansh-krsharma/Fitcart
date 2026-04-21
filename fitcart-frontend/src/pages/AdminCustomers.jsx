import { useEffect, useState } from "react";
import API from "../services/api";

export default function AdminCustomers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    API.get("/admin/users").then((res) => setUsers(res.data));
  }, []);

  return (
    <div className="page-shell">
      <div className="container">
        <section className="section-heading compact-heading">
          <div>
            <h2>Customers</h2>
            <p>View registered users and monitor their access roles.</p>
          </div>
          <span className="badge">Admin workspace</span>
        </section>

        <div className="customer-grid">
          {users.map((u) => (
            <div key={u.id} className="card customer-card">
              <div className="customer-avatar">{(u.name || u.email || "U").split(" ").map(s => s[0]).join("").slice(0,2).toUpperCase()}</div>
              <div>
                <h3>{u.name || "Unnamed User"}</h3>
                <p>{u.email}</p>
              </div>
              <span className="badge">{u.role}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
