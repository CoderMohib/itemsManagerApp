import SideBar from "./Components/Organism/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Category from "./Pages/Category";
import AddProductForm from "./Pages/AddCategory";
import "./styles/index.css";
import "./styles/mediaQuery.css"
import { Fragment } from "react";

function App() {
  return (
    <Router>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addproduct" element={<AddProductForm/>} />
        </Routes>
      
    </Router>
  );
}

export default App;
