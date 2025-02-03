import { useContext } from "react"
import { NavContext } from "../NavContext"
export default function NavItem({icon, text}){
    const [ activePage, setActivePage ] = useContext(NavContext);
    const handleClick = () => {
        setActivePage(page);
      };
    return <a href="#" className="nav-item" onClick={handleClick}>{icon} {text}</a>
}