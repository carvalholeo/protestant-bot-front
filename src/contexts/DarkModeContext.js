import { useState, createContext, useEffect } from "react";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);
  const [theme, setTheme] = useState(window.localStorage.getItem('color-theme'));

  useEffect(() => {
    setTheme(window.localStorage.getItem('color-theme'));
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      setIsDark(true);
      return;
    }
    setIsDark(false);
  }, [theme]);

  useEffect(() => {
    if (isDark) {
      window.localStorage.setItem('color-theme', 'dark');
      return;
    }
    window.localStorage.setItem('color-theme', 'light');
  }, [isDark]);

  function changeDarkMode(dark) {
    setIsDark(dark);
  }

  return (
    <DarkModeContext.Provider value={{ isDark, changeDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
