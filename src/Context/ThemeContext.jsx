import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeContextProvider({ children }) {
  const [state, setState] = useState({
    isLightTheme: false,
  });

  function toggleTheme() {
    setState({ ...state, isLightTheme: !state.isLightTheme });
  }

  return (
    <ThemeContext.Provider value={{ ...state, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
