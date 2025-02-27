import SideBar from "./Components/Organism/SideBar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import AddProduct from "./Pages/AddProduct";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.css";
import "./styles/mediaQuery.css";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Router>
      <SideBar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
