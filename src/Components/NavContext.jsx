import { useState,createContext } from "react";
export const NavContext = createContext();

export function NavProvider ({ children }){
    const [activePage, setActivePage] = useState('');
    return (
      <NavContext.Provider value={{ activePage, setActivePage }}>
        {children}
      </NavContext.Provider>
    );
  };