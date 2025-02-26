import NavItem from "../Atoms/NavItem";
export default function NavMenu({ isOpen, setIsOpen }) {
  return (
    <ul className={`nav-menu ${isOpen ? "right" : ""}`}>
      <button
        className="toggle-close"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <i className="ri-close-line"></i>
      </button>
      <NavItem icon="🏠" text="Home" to="/" />
      <NavItem icon="📦" text="Products" to="/products" />
      <NavItem icon="➕" text="Add Product" to="/addproduct" />
      <NavItem icon="📁" text="Categories" to="/category" />
      <NavItem icon="➕" text="Add Category" to="/addcategory" />
    </ul>
  );
}
