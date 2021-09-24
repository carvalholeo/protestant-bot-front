import { useState, createContext } from "react";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  function changeDarkMode(dark) {
    setIsDark(dark);
  }
  return (
    <DarkModeContext.Provider value={{ isDark, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

export default DarkModeProvider;
