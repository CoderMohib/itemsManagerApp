import { Fragment } from "react";

import { products } from "../../data/product"; 

export default function Carousel() {
  return (
    <Fragment>
        <p className="category">Electronics</p>
        <div className="carousal-container">
          {products
            .filter((product) => product.categoryId === 1) 
            .map((product) => (
              <div key={product.id} className="carousal-Product">
                <div className="product-img">
                  <img src={product.images[0]} alt={product.name} />
                </div>
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p>
                    <strong>Price:</strong> ${product.price}
                  </p>
                  <p>
                    <strong>Description:</strong> {product.description}
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.stock}
                  </p>
                  <p>
                    <strong>Rating:</strong> {product.rating}
                  </p>
                </div>
              </div>
            ))}
        </div>
    </Fragment>
  );
}
