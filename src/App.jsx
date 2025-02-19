import SideBar from "./Components/Organism/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/AddCategory";
import AddProduct from "./Pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/mediaQuery.css"
import { Fragment } from "react";
import AddCategoryForm from "./Pages/AddCategory";

function App() {
  return (
    <Router>
        <SideBar />
        <ToastContainer/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addproduct" element={<AddProduct/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
