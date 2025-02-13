import React, { useState } from "react";
import { categories } from "../data/category";
import "../styles/form.css";

export default function AddProductForm() {
  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    price: 5,
    stock: 0,
    description: "",
    brand: "",
    rating: 0,
    images: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);
  function handleOnChange(e) {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  }
  function isValid(){
    return product.name.trim() &&
    product.categoryId.trim() &&
    product.price >= 5 &&
    product.stock >= 0 &&
    product.brand.trim() &&
    product.description.trim()
  }
  function handleOnSubmit(e){
    e.preventDefault();
  }
  console.log(product);
  return (
    <div className="side-Content">
      <div className="form-container">
        <h3 className="add-heading">Add New Product</h3>
        <form className="styled-form" onSubmit={handleOnSubmit}>
          <div className="form-row">
            <div className="input-group">
              <label htmlFor="product-name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                id="product-name"
                onChange={handleOnChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <select name="categoryId" id="category" onChange={handleOnChange}>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option value={category.id} key={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                placeholder="$ Price"
                id="price"
                min="5"
                onChange={handleOnChange}
              />
            </div>
            <div className="input-group">
              <label htmlFor="stock">Stock</label>
              <input
                type="number"
                name="stock"
                placeholder="Available stock"
                id="stock"
                min="0"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="brand">Brand</label>
              <input
                type="text"
                name="brand"
                placeholder="Brand name"
                id="brand"
                onChange={handleOnChange}
              />
            </div>
            <div className="input-group">
              <label>Image URL</label>
              <input
                type="text"
                name="images"
                placeholder="Enter image URL"
                onChange={handleOnChange}
              />
            </div>
          </div>

          <div className="input-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              placeholder="Enter product description..."
              id="description"
              onChange={handleOnChange}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={!isSubmit || isValid()}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
