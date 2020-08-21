import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { eigengrau, white } from '../utils';

export const Global = createGlobalStyle`
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
    background: ${white};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;
