import React from 'react';
import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import { THEME } from "./assets/defaultTheme";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;