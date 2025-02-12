import { Fragment, useState } from "react";
import logo from "../../assets/logo.jpg";
export default function Carousel() {
  return (
    <Fragment>
      <div>
        <p className="category">Electronis</p>
        <div className="carousal-container">
          <div className="carousal-Product">
            <div className="product-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="product-details">
              <div className="product-header">
                <h3>Electronics Product</h3>
              </div>
              <div className="product-main">
                <p>
                  <strong>Price:</strong> 1500$
                </p>
                <p>
                  <strong>Description:</strong> High-quality wireless headphones
                  with noise-cancellation and long battery life.
                </p>
                <p>
                  <strong>Stock:</strong> 15
                </p>
                <p>
                  <strong>Rating:</strong> 4.5
                </p>
              </div>
            </div>
          </div>
          <div className="carousal-Product">
            <div className="product-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="product-details">
              <h3>Electronics Type Product</h3>
              <p>
                <strong>Price:</strong> 1500$
              </p>
              <p>
                <strong>Description:</strong> High-quality wireless headphones
                with noise-cancellation and long battery life.
              </p>
              <p>
                <strong>Stock:</strong> 15
              </p>
              <p>
                <strong>Rating:</strong> 4.5
              </p>
            </div>
          </div>
          <div className="carousal-Product">
            <div className="product-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="product-details">
              <h3>Electronics Type Product</h3>
              <p>
                <strong>Price:</strong> 1500$
              </p>
              <p>
                <strong>Description:</strong> High-quality wireless headphones
                with noise-cancellation and long battery life.
              </p>
              <p>
                <strong>Stock:</strong> 15
              </p>
              <p>
                <strong>Rating:</strong> 4.5
              </p>
            </div>
          </div>
          <div className="carousal-Product">
            <div className="product-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="product-details">
              <h3>Electronics Type Product</h3>
              <p>
                <strong>Price:</strong> 1500$
              </p>
              <p>
                <strong>Description:</strong> High-quality wireless headphones
                with noise-cancellation and long battery life.
              </p>
              <p>
                <strong>Stock:</strong> 15
              </p>
              <p>
                <strong>Rating:</strong> 4.5
              </p>
            </div>
          </div>
          <div className="carousal-Product">
            <div className="product-img">
              <img src={logo} alt="logo" />
            </div>
            <div className="product-details">
              <h3>Electronics Type Product</h3>
              <p>
                <strong>Price:</strong> 1500$
              </p>
              <p>
                <strong>Description:</strong> High-quality wireless headphones
                with noise-cancellation and long battery life.
              </p>
              <p>
                <strong>Stock:</strong> 15
              </p>
              <p>
                <strong>Rating:</strong> 4.5
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
