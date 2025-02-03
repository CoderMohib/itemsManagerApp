export default function NavItem({icon, text, onClick}){
    return <a href="#" className="nav-item" onClick={() => onClick(text)}>{icon} {text}</a>
}