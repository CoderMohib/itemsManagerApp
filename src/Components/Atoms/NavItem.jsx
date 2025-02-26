import { NavLink } from "react-router-dom";
export default function NavItem({ icon, text, to }) {
  return (
    <li className="nav-item">
      <NavLink to={to} className="nav-link"  activeclassname="active">{text} {icon}
      </NavLink>
    </li>
  );
}
