import NavItem from "../Atoms/NavItem";
export default function NavMenu({ onSelect }){
    return (
    <ul className="nav-menu">
        <NavItem icon="🏠" text="Home" to="/" />
        <NavItem icon="📦" text="Products" to="/products" />
        <NavItem icon="➕" text="Add Product" to="/addproduct" />
        <NavItem icon="📁" text="Categories" to="/category" />
        <NavItem icon="➕" text="Add Category" to="/addcategory" />
    </ul>);
}