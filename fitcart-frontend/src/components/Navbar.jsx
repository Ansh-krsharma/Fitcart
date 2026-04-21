import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { token, role, logout } = useContext(AuthContext);

  return (
    <nav>
      <Link to="/">FitCart</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      {role === "ROLE_ADMIN" && (
        <>
          <Link to="/admin">Admin</Link>
          <Link to="/admin/products">Manage Products</Link>
          <Link to="/admin/orders">Manage Orders</Link>
        </>
      )}
      {!token ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </nav>
  );
}
