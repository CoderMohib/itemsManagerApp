import logo from '../../assets/logo.jpg'
export default function Logo(){
    return(
        <div className="sidebar-header-img">
            <img src={logo} alt="App Logo" className="logo" />
        </div>
    );
}