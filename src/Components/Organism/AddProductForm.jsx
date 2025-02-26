import { useState } from "react";
import { categories } from "../../data/category";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function AddProductForm({ addProduct }) {
  const [errors, setErrors] = useState({});
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
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: e.target.value ? "" : "This field is required",
    }));
  }
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
      });
    });

    Promise.all(promises)
      .then((productImages) => {
        setProduct((prevProduct) => {
          const updatedImages = [...prevProduct.images, ...productImages];
          setErrors((prevErrors) => ({
            ...prevErrors,
            images:
              updatedImages.length > 0 ? "" : "At least one image is required",
          }));
          return { ...prevProduct, images: updatedImages };
        });
      })
      .catch((error) => console.error("Error converting files:", error));
  };
  const handleRemoveImage = (indexToRemove) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      images: prevProduct.images.filter((_, index) => index !== indexToRemove),
    }));
  };

  function isValid() {
    let newErrors = {};

    if (!product.name.trim()) newErrors.name = "Product name is required";
    if (!product.categoryId.trim())
      newErrors.categoryId = "Category is required";
    if (!product.price || Number(product.price) < 1)
      newErrors.price = "Price must be at least $1";
    if (product.stock < 0) newErrors.stock = "Stock cannot be negative";
    if (!product.brand.trim()) newErrors.brand = "Brand is required";
    if (!product.description.trim())
      newErrors.description = "Description is required";
    if (product.images.length === 0)
      newErrors.images = "At least one image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
              <label htmlFor="product-name">
                Name<span>*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter product name"
                id="product-name"
                onChange={handleOnChange}
                value={product.name}
                className={errors.name ? "red-border" : ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="category">
                Category<span>*</span>
              </label>
              <select
                name="categoryId"
                id="category"
                onChange={handleOnChange}
                value={product.categoryId}
                className={errors.categoryId ? "red-border" : ""}
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
              <label htmlFor="price">
                Price<span>*</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="$ Price"
                id="price"
                min="1"
                onChange={handleOnChange}
                value={product.price}
                className={errors.price ? "red-border" : ""}
              />
            </div>
            <div className="input-group">
              <label htmlFor="stock">
                Stock<span>*</span>
              </label>
              <input
                type="number"
                name="stock"
                placeholder="Available stock"
                id="stock"
                min="0"
                onChange={handleOnChange}
                value={product.stock}
                className={errors.stock ? "red-border" : ""}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <label htmlFor="brand">
                Brand<span>*</span>
              </label>
              <input
                type="text"
                name="brand"
                placeholder="Brand name"
                id="brand"
                onChange={handleOnChange}
                value={product.brand}
                className={errors.brand ? "red-border" : ""}
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
              <label
                htmlFor="images"
                className={`file-label ${errors.images ? "red-border" : ""}`}
              >
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
                <div key={index} className="image-container">
                  <img
                    src={image}
                    alt={`Product ${index}`}
                    className="preview-image"
                  />
                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() => handleRemoveImage(index)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="input-group full-width">
            <label htmlFor="description">
              Description<span>*</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter product description..."
              id="description"
              onChange={handleOnChange}
              value={product.description}
              className={errors.description ? "red-border" : ""}
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmit}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
