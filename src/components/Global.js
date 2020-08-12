import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { almostWhite, eigengrau } from "../utils";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${eigengrau};
    background: ${almostWhite};
  }
`;

export default GlobalStyle;
