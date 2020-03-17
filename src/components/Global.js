import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import {
  below,
  white,
  lighter,
  light,
  eigengrau,
  pink,
  purple,
  blue,
} from "../utils";

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 42px 16px 0 20px;
    color: ${eigengrau};
    background: ${white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    &::before {
     content: '';
     position: fixed;
     top: 0;
     left: 0;
     display: inline-block;
     height: 100vh;
     width: 16px;
     background: linear-gradient(to bottom, ${pink} 0%, ${pink} 40%, ${purple} 40%, ${purple} 60%, ${blue} 60%, ${blue} 100%)
   }
   ${below.med`
      &::before {
        position: fixed;
        height: 12px;
        width: 100vw;
        background: linear-gradient(to right, ${pink} 0%, ${pink} 40%, ${purple} 40%, ${purple} 60%, ${blue} 60%, ${blue} 100%);
      }
   `}
  }

  /*header {
    width: 90%;
    margin: 0 auto;
  }*/

  /* h1 {
    color: ${lighter};
    font-family: 'IBM Plex Mono', courier, monospace;
    letter-spacing: 0.1em;
  }

  nav {
    height: 100%
    width: 20em;
    float: left;
  } */


  /* Okay, I think I actually want the *icons* to have color, and the header to be a little lighter, and the li text to be a little darker */
  /* nav li {
    color: ${light};
    font-family: 'Noto Serif TC', serif;
    &:nth-child(1) {
      color: ${pink};
    }
    &:nth-child(2) {
      color: ${purple};
    }
    &:nth-child(3) {
      color: ${blue};
    }
    &:nth-child(4) {
      color: ${eigengrau};
    } */
  }

  /* Figure out the nav and header first, maybe some sort of fuzzy background thing where the main will be? Maybe quotes? */
  /* main {
    width: 90%;
    margin: 0 auto;
    padding: 20px;
  } */
`;

export default GlobalStyle;
