import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, role, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="site-header">
      <div className="container nav-shell">
        <Link to="/" className="brand-mark">
          <span className="brand-icon">F</span>
          <div>
            <div className="brand-title">FitCart</div>
            <div className="brand-subtitle">Premium fitness storefront</div>
          </div>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Shop</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Cart</NavLink>
          <NavLink to="/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Orders</NavLink>
          {role === "ROLE_ADMIN" && (
            <>
              <NavLink to="/admin" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Dashboard</NavLink>
              <NavLink to="/admin/products" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Products</NavLink>
              <NavLink to="/admin/orders" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Manage Orders</NavLink>
              <NavLink to="/admin/customers" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Customers</NavLink>
            </>
          )}
        </nav>

        <div className="nav-actions">
          {!token ? (
            <>
              <Link to="/login" className="button ghost-btn">Login</Link>
              <Link to="/register" className="button primary-btn">Register</Link>
            </>
          ) : (
            <button onClick={handleLogout} className="button dark-btn">Logout</button>
          )}
        </div>
      </div>
    </header>
  );
}
