import { useEffect, useState } from "react";
import API from "../services/api";

const emptyForm = { name: "", description: "", price: "", quantity: "", category: "", imageUrl: "" };

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [message, setMessage] = useState("");

  const loadProducts = () => {
    API.get("/admin/products").then((res) => setProducts(res.data));
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const submitProduct = async (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      price: Number(form.price),
      quantity: Number(form.quantity)
    };

    try {
      if (editingId) {
        await API.put(`/admin/products/${editingId}`, payload);
        setMessage("Product updated");
      } else {
        await API.post("/admin/products", payload);
        setMessage("Product added");
      }
      setForm(emptyForm);
      setEditingId(null);
      loadProducts();
    } catch (e) {
      setMessage(e.response?.data?.message || "Could not save product");
    }
  };

  const startEdit = (p) => {
    setEditingId(p.id);
    setForm({
      name: p.name || "",
      description: p.description || "",
      price: p.price || "",
      quantity: p.quantity || "",
      category: p.category || "",
      imageUrl: p.imageUrl || ""
    });
  };

  const deleteProduct = async (id) => {
    await API.delete(`/admin/products/${id}`);
    loadProducts();
  };

  return (
    <div className="page-shell">
      <div className="container">
        <section className="section-heading compact-heading">
          <div>
            <h2>Admin Products</h2>
            <p>Add, update, and manage the storefront catalog.</p>
          </div>
        </section>

        <div className="admin-products-layout">
          <div className="card form-card-large">
            <h3>{editingId ? "Edit Product" : "Add Product"}</h3>
            {message && <div className="flash-message small">{message}</div>}
            <form onSubmit={submitProduct} className="product-form-grid">
              <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
              <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
              <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
              <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
              <input placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
              <button className="button primary-btn">{editingId ? "Update Product" : "Save Product"}</button>
            </form>
          </div>

          <div>
            <div className="admin-product-grid">
              {products.map((p) => (
                <div key={p.id} className="card admin-product-card">
                  <img src={p.imageUrl || "https://via.placeholder.com/420x280?text=FitCart"} alt={p.name} className="admin-product-image" />
                  <div className="admin-product-body">
                    <div className="order-top-row">
                      <strong>{p.name}</strong>
                      <span className="badge">{p.category || 'Fitness'}</span>
                    </div>
                    <p className="product-text">{p.description}</p>
                    <div className="cart-meta-row">
                      <span>₹{p.price}</span>
                      <span>Stock: {p.quantity}</span>
                    </div>
                    <div className="inline-actions">
                      <button className="button ghost-btn" onClick={() => startEdit(p)}>Edit</button>
                      <button className="button dark-btn" onClick={() => deleteProduct(p.id)}>Delete</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
