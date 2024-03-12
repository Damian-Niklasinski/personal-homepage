import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, ::after, ::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Inter', sans-serif;
    word-break: break-word;
    background-color: rgba(36, 34, 34, 0.835);
}
`;