import NavItem from "../Atoms/NavItem";
export default function NavMenu({ onSelect }){
    return (
    <nav className="nav-menu">
        <NavItem icon="🏠" text="Home" onClick={onSelect} />
        <NavItem icon="📦" text="Products" onClick={onSelect} />
        <NavItem icon="➕" text="Add Product" onClick={onSelect} />
        <NavItem icon="📁" text="Categories" onClick={onSelect} />
        <NavItem icon="➕" text="Add Category" onClick={onSelect} />
    </nav>);
}