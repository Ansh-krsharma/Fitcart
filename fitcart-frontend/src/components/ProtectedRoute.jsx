import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { token, role } = useContext(AuthContext);

  if (!token) return <Navigate to="/login" />;
  if (adminOnly && role !== "ROLE_ADMIN") return <Navigate to="/" />;
  return children;
}
