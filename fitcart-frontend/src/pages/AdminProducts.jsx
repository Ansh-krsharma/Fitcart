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
    <div className="container">
      <div className="row">
        <div className="card">
          <h2>{editingId ? "Edit Product" : "Add Product"}</h2>
          {message && <p>{message}</p>}
          <form onSubmit={submitProduct}>
            <input placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <textarea placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
            <input placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <input placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
            <input placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
            <input placeholder="Image URL" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
            <button className="primary">{editingId ? "Update Product" : "Save Product"}</button>
          </form>
        </div>
        <div className="card">
          <h2>All Products</h2>
          {products.map((p) => (
            <div key={p.id} className="list-item">
              <div>
                <strong>{p.name}</strong> — ₹{p.price} — Stock: {p.quantity}
                <p>{p.category}</p>
              </div>
              <div className="inline-actions">
                <button className="secondary" onClick={() => startEdit(p)}>Edit</button>
                <button className="danger" onClick={() => deleteProduct(p.id)}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
