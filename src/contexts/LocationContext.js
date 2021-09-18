import { useState, createContext, useEffect } from "react";
import Analytics from "../services/analytics";

export const LocationContext = createContext();

function LocationProvider({ children }) {
  const [pathName, setPathName] = useState({});

  useEffect(() => {
    if (pathName === {} || pathName.pathname === undefined) {
      return;
    }
    Analytics(pathName);
  }, [pathName]);

  function changePathName(path) {
    setPathName(path);
  }

  return (
    <LocationContext.Provider value={{ pathName, changePathName }}>
      {children}
    </LocationContext.Provider>
  )
}

export default LocationProvider;
