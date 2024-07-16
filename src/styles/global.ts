import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    -webkit-font-smmothing: antialiased;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.secundaryGray};
  }
`
