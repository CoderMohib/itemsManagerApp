import { categories } from "../data/category.jsx";
import ProductCarousel from "../Components/Organism/ProductCarousel";
export default function Poroduct() {
  return (
      <ProductCarousel category={categories[0]}/>
  );
}
