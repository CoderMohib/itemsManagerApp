import { products } from "../../data/product";

export default function ProductCarousel({ category }) {
  const categoryProducts = products.filter(
    (product) => product.categoryId === category.id
  );
  return (
    <div class="side-Content">
        <div class="category">
            <p class="categoryName"><span>Category:</span>  {category.name}</p>
        </div>
        <div class="carousals">
            <div class="image-carousal">
                <div class="img">
                    <img src={categoryProducts[0].images[0]} alt="Electronics" />
                </div>
                <div class="image-content">
                    <p><h3>{categoryProducts[0].name}</h3></p>
                    <p><span>Price:</span> {categoryProducts[0].price}$</p>
                    <p><span>Description:</span> {categoryProducts[0].description}</p>
                    <p><span>Stocks:</span> {categoryProducts[0].stock}</p>
                    <p><span>Rating:</span> {categoryProducts[0].rating}</p>
                </div>
            </div>
            
        </div>
    </div>
  );
}
