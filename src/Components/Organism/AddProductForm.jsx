import { useState } from "react";
import { categories } from "../../data/category";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    name: "",
    categoryId: "",
    price: "",
    stock: 0,
    description: "",
    brand: "",
    rating: 0,
    images: [],
    reviews: [],
  });
  const [isSubmit, setIsSubmit] = useState(false);
  function handleOnChange(e) {
    setProduct((prevProduct) => ({
      ...prevProduct,
      [e.target.name]: e.target.value,
    }));
  }
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files); // Convert FileList to Array
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result); // Store Base64 string
        reader.onerror = reject;
      });
    });

    Promise.all(promises)
      .then((productImages) => {
        setProduct((prevProduct) => ({
          ...prevProduct,
          images: [...prevProduct.images, ...productImages], // Append images
        }));
      })
      .catch((error) => console.error("Error converting files:", error));
  };
  function isValid() {
    return (
      product.name.trim() &&
      product.categoryId.trim() &&
      Number(product.price) >= 1 &&
      product.stock >= 0 &&
      product.brand.trim() &&
      product.description.trim() &&
      product.images.length != 0
    );
  }
  function handleOnSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      addProduct(product);

      setIsSubmit(true);
      setTimeout(() => {
        setIsSubmit(false);
        toast.success("Product added successfully!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }, 500);
      setProduct({
        name: "",
        categoryId: "",
        price: "",
        stock: 0,
        description: "",
        brand: "",
        rating: 0,
        images: [],
        reviews: [],
      });
    }
  }
  return (
    <div className="side-Content">
      <div className="form-container">
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
                value={product.name}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">Category</label>
              <select
                name="categoryId"
                id="category"
                onChange={handleOnChange}
                value={product.categoryId}
              >
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
                min="1"
                onChange={handleOnChange}
                value={product.price}
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
                value={product.stock}
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
                value={product.brand}
              />
            </div>
            <div className="input-group">
              <label htmlFor="images">Upload Images</label>
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <label htmlFor="images" className="file-label">
                <i className="ri-file-upload-fill upload-icon"></i>Choose Images
              </label>
            </div>
          </div>
          {product.images.length < 1 ? (
            <div className="no-image-preview">
              <p className="no-image-text">No Images Uploaded Yet!</p>
            </div>
          ) : (
            <div className="image-preview">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index}`}
                  className="preview-image"
                />
              ))}
            </div>
          )}
          <div className="input-group full-width">
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              placeholder="Enter product description..."
              id="description"
              onChange={handleOnChange}
              value={product.description}
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={isSubmit || !isValid()}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
