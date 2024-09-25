import React, { useContext, useState } from "react";

const ThemeContext = useContext();
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
