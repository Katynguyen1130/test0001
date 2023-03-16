import React, { useState, createContext, useEffect } from "react";
const getLS = () => {
  return localStorage.getItem("theme");
};
const setLs = (theme) => {
  localStorage.setItem("theme", theme);
};

const defaultValue = {
  theme: getLS() || "light",
  setTheme: () => null,
};

export const ThemeContext = createContext(defaultValue);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultValue.theme);
  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      setLs("dark");
    } else {
      setTheme("light");
      setLs("light");
    }
  };

  useEffect(() => {
    if (theme === "light") document.body.classList.remove("dark");
    else document.body.classList.add("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
