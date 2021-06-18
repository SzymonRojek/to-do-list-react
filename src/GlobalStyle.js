import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
 
  ${normalize}

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;