import { useEffect, useMemo, useState } from "react";
import API from "../services/api";

const quickCategories = ["All", "Supplements", "Equipment", "Accessories", "Yoga", "Cardio"];

const ratingForProduct = (id) => (4.2 + ((id % 7) * 0.1)).toFixed(1);

export default function Home() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const params = useMemo(() => {
    const p = {};
    if (q.trim()) p.q = q.trim();
    if (category && category !== "All") p.category = category;
    return p;
  }, [q, category]);

  useEffect(() => {
    API.get("/products", { params }).then((res) => setProducts(res.data));
  }, [params]);

  useEffect(() => {
    API.get("/products/categories").then((res) => setCategories(res.data)).catch(() => setCategories([]));
  }, []);

  const visibleProducts = useMemo(() => {
    const items = [...products];
    if (sortBy === "priceLow") items.sort((a, b) => a.price - b.price);
    if (sortBy === "priceHigh") items.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") items.sort((a, b) => Number(ratingForProduct(b.id)) - Number(ratingForProduct(a.id)));
    if (sortBy === "name") items.sort((a, b) => a.name.localeCompare(b.name));
    return items;
  }, [products, sortBy]);

  const addToCart = async (productId) => {
    try {
      await API.post("/cart", { productId, quantity: 1 });
      setMessage("Product added to cart");
      setTimeout(() => setMessage(""), 1800);
    } catch (e) {
      setMessage(e.response?.data?.message || "Login required");
      setTimeout(() => setMessage(""), 2200);
    }
  };

  const categoryOptions = [...new Set([...quickCategories.filter((c) => c !== "All"), ...categories])];

  return (
    <div className="page-shell">
      <div className="container">
        <section className="hero-panel premium-hero">
          <div className="hero-copy">
            <span className="hero-tag">New season fitness drop</span>
            <h1>Build a cleaner, faster shopping experience for your fitness brand.</h1>
            
            <div className="hero-actions">
              <a href="#catalog" className="button primary-btn">Shop now</a>
              <button className="button light-btn" onClick={() => { setQ(""); setCategory(""); setSortBy("featured"); }}>
                View collections
              </button>
            </div>
          </div>
          <div className="hero-stats hero-stats-grid uploaded-stat-grid">
            <div className="hero-mini-card"><strong>150+</strong><span>Trusted products</span></div>
            <div className="hero-mini-card"><strong>24 hrs</strong><span>Fast dispatch</span></div>
            <div className="hero-mini-card"><strong>JWT</strong><span>Secure checkout</span></div>
          </div>
        </section>

        <section className="section-heading section-gap-top">
          <div>
            <h2>Featured products</h2>
            <p>{visibleProducts.length} products found for your current selection.</p>
          </div>
          <span className="badge">Premium storefront UI</span>
        </section>

        <div className="store-layout" id="catalog">
          <aside className="card filter-panel">
            <div className="filter-header">Filters</div>
            <div className="filter-block">
              <label>Search</label>
              <input
                placeholder="Search protein, bands, yoga mats..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div className="filter-block">
              <label>Category</label>
              <div className="category-chips vertical-chips">
                {["All", ...categoryOptions].map((chip) => (
                  <button
                    key={chip}
                    className={chip === (category || "All") ? "chip active-chip" : "chip"}
                    onClick={() => setCategory(chip === "All" ? "" : chip)}
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-block">
              <label>Sort by</label>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="priceLow">Price: Low to High</option>
                <option value="priceHigh">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="name">Name</option>
              </select>
            </div>
          </aside>

          <div>
            {message && <div className="flash-message">{message}</div>}

            <div className="category-chips top-chip-row">
              {["All", ...categoryOptions].map((chip) => (
                <button
                  key={`top-${chip}`}
                  className={chip === (category || "All") ? "chip active-chip" : "chip"}
                  onClick={() => setCategory(chip === "All" ? "" : chip)}
                >
                  {chip}
                </button>
              ))}
            </div>

            <div className="grid product-grid">
              {visibleProducts.map((p) => (
                <article key={p.id} className="card product-card enhanced-card storefront-card">
                  <div className="product-image-wrap">
                    <img src={p.imageUrl || "https://via.placeholder.com/500x350?text=FitCart"} alt={p.name} className="product-image" />
                    <span className="badge floating-badge">{p.category || "Fitness"}</span>
                  </div>
                  <div className="product-body">
                    <div className="rating-row">
                      <span className="mini-badge">★ {ratingForProduct(p.id)}</span>
                      <span className="mini-badge subtle">Stock: {p.quantity}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p className="product-text">{p.description || "Premium fitness product for your daily training goals."}</p>
                    <div className="product-meta">
                      <strong>₹{p.price}</strong>
                      <span>{p.quantity > 0 ? "Ready to ship" : "Out of stock"}</span>
                    </div>
                    <button className="button primary-btn full-btn" onClick={() => addToCart(p.id)} disabled={p.quantity === 0}>
                      {p.quantity === 0 ? "Out of Stock" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
