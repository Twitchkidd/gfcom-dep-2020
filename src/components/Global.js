import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { almostWhite, eigengrau } from "../utils";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    color: ${eigengrau};
    background: ${almostWhite};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
