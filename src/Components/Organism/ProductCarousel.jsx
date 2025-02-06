import { products } from "../../data/product";

export default function ProductCarousel({ category }) {

  return (
    <div className="side-Content">
      <div className="category">
        <p className="categoryName">
          <span>Category:</span> Electronics
        </p>
      </div>
        
      <div className="carousals">
        <button className="left-btn"><i class="ri-arrow-drop-left-line"></i></button>
        <div className="image-carousal">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Electronics"
            />
          </div>
          <div className="image-content">
            <p>
              <h3>Wireless Bluetooth Headphones</h3>
            </p>
            <p>
              <span>Price:</span> 59.9$
            </p>
            <p>
              <span>Description:</span> High-quality wireless headphones with
              noise-cancellation and long battery life.
            </p>
            <p>
              <span>Stocks:</span> 30
            </p>
            <p>
              <span>Rating:</span> 4.5⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>
        <div className="image-carousal">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Electronics"
            />
          </div>
          <div className="image-content">
            <p>
              <h3>Wireless Bluetooth Headphones</h3>
            </p>
            <p>
              <span>Price:</span> 59.9$
            </p>
            <p>
              <span>Description:</span> High-quality wireless headphones with
              noise-cancellation and long battery life.
            </p>
            <p>
              <span>Stocks:</span> 30
            </p>
            <p>
              <span>Rating:</span> 4.5⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>
        <div className="image-carousal">
          <div className="img">
            <img
              src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
              alt="Electronics"
            />
          </div>
          <div className="image-content">
            <p>
              <h3>Wireless Bluetooth Headphones</h3>
            </p>
            <p>
              <span>Price:</span> 59.9$
            </p>
            <p>
              <span>Description:</span> High-quality wireless headphones with
              noise-cancellation and long battery life.
            </p>
            <p>
              <span>Stocks:</span> 30
            </p>
            <p>
              <span>Rating:</span> 4.5⭐⭐⭐⭐⭐
            </p>
          </div>
        </div>

        <button className="right-btn"><i class="ri-arrow-drop-right-line"></i></button>
      </div>
    </div>
  );
}
