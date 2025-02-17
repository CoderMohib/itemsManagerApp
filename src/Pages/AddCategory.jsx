import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/categoryform.css";
export default function AddCategoryForm({ addCategory }) {
  const [category, setCategory] = useState({
    name: "",
    description: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  function handleOnChange(e) {
    setCategory((prevCategory) => ({
      ...prevCategory,
      [e.target.name]: e.target.value,
    }));
  }

  function isValid() {
    return category.name.trim() && category.description.trim();
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (isValid()) {
      addCategory(category);
      toast.success("✅ Category added successfully!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setIsSubmit(true);
      setTimeout(() => setIsSubmit(false), 500);
      setCategory({ name: "", description: "" });
    }
  }

  return (
    <div className="side">
      <div className="formContainer">
        <h2>Add Category</h2>
        <form className="styledForm" onSubmit={handleOnSubmit}>
          <div className="inputGroup">
            <label htmlFor="category-name">Category Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter category name"
              id="category-name"
              onChange={handleOnChange}
              value={category.name}
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="category-description">Description</label>
            <textarea
              name="description"
              placeholder="Enter category description"
              id="category-description"
              onChange={handleOnChange}
              value={category.description}
            ></textarea>
          </div>

          <button
            type="submit"
            className="submitBtn"
            disabled={isSubmit || !isValid()}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
