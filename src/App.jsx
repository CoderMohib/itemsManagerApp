import SideBar from "./Components/Organism/SideBar";
import NavProvider from "./Components/NavContext";
import "./styles/index.css";
function App() {
  return (
    <NavProvider>
      <SideBar />
    </NavProvider>
  );
}
export default App;
