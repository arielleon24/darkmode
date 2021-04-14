import React, { useState } from "react";
import './App.css';
import {ThemeProvider} from "styled-components"

function App() {
  const {theme, setTheme} = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme={theme ===light ? "" : ""}>
       <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
