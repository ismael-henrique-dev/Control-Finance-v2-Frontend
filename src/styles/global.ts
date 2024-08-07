import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    


  }

  html {
    scroll-behavior: smooth;
  }

    /* Estiliza a barra de rolagem */
  ::-webkit-scrollbar {
    width: 14px; 
  }

  /* Estiliza o fundo da barra de rolagem */
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.secundaryGray};
  }

  /* Estiliza o polegar da barra de rolagem */
  ::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.secundary};
    border-radius: 6px; 
  }

  /* Estiliza o polegar da barra de rolagem ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  :focus {
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.secundaryGray};
    -webkit-font-smoothing: antialiased;
  }
`
