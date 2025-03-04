import React, { useState } from "react";
import "../styles/form.css";
import { products as InitialProducts } from "../data/product";
import AddProductForm from "../Components/Organism/AddProductForm";
export default function AddProduct() {
  const [products, setProducts] = useState(InitialProducts);
  function addProduct(newProduct) {
    setProducts((prevProd) => [
      ...prevProd,
      { id: prevProd.length + 1, ...newProduct },
    ]);
  }

  return <AddProductForm addProduct={addProduct} />;
}
