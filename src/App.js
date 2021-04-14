import React, { useState } from "react";
import './App.css';
import styled, {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme} from "./themes.js";

const StyledApp = styled.div

function App() {
  const {theme, setTheme} = useState("light")

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <ThemeProvider theme= {theme === "light" ? lightTheme : darkTheme}>
       <StyledApp> Hello world </StyledApp>
    </ThemeProvider>
  );
}

export default App;
