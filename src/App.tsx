import "antd/dist/antd.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { THEME } from "./assets/defaultTheme";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <MainContainer />
    </ThemeProvider>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(theme) => theme.theme.colors.background};
  }
`;