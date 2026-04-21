import { useEffect, useMemo, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");

  const params = useMemo(() => {
    const p = {};
    if (q.trim()) p.q = q.trim();
    if (category) p.category = category;
    return p;
  }, [q, category]);

  const loadProducts = () => {
    API.get("/products", { params }).then((res) => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, [q, category]);

  useEffect(() => {
    API.get("/products/categories").then((res) => setCategories(res.data));
  }, []);

  const addToCart = async (productId) => {
    try {
      await API.post("/cart", { productId, quantity: 1 });
      setMessage("Added to cart");
    } catch (e) {
      setMessage(e.response?.data?.message || "Login required");
    }
  };

  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1>FitCart Store</h1>
          <p>Protein, accessories, gym equipment, wearables and recovery products.</p>
        </div>
      </div>

      <div className="toolbar card">
        <input
          placeholder="Search products, categories or keywords"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <button className="secondary" onClick={() => { setQ(""); setCategory(""); }}>Reset</button>
      </div>

      {message && <p>{message}</p>}
      <div className="grid">
        {products.map((p) => (
          <div key={p.id} className="card product-card">
            <img src={p.imageUrl || "https://via.placeholder.com/300"} alt={p.name} className="product-image" />
            <span className="badge">{p.category}</span>
            <h3>{p.name}</h3>
            <p>{p.description}</p>
            <p><strong>₹{p.price}</strong></p>
            <p>Stock: {p.quantity}</p>
            <button className="primary" onClick={() => addToCart(p.id)} disabled={p.quantity === 0}>
              {p.quantity === 0 ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
