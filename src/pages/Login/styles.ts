import { FormControl } from "@mui/material"
import styled from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerLogin = styled.main`
  background-color: ${(props) => props.theme.colors.gray_1};
  /* margin: 0 auto; */
  display: flex;
  align-items: center;
  flex: wrap;
  gap: 2.5rem;
  padding: 4rem 8rem;
  border-radius: 12px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerSponsor = styled.div`
  text-align: center;
  width: 20rem;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.25rem 1.5rem;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text};
`

export const Form = styled.form`
  width: 20rem;
  text-align: start;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.125rem; /* 18px */

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.text};
    font-weight: 400;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.125rem; /* 18px */
  }

  span {
    color: ${(props) => props.theme.colors.text};
  }
`

interface ButtonProps {
  variant?: "default" | "goToWithGoogle" | "visitMode"
}

export const Button = styled.button<ButtonProps>`
  width: 20rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  color: ${(props) => {
    switch (props.variant) {
      case "goToWithGoogle":
        return props.theme.colors.invertColor
      case "visitMode":
        return props.theme.colors.text
      default:
        return props.theme.colors.white
    }
  }};

  border-radius: 12px;
  border: 0;
  background-color: ${(props) => {
    switch (props.variant) {
      case "goToWithGoogle":
        return props.theme.colors.text
      case "visitMode":
        return props.theme.colors.gray_2
      default:
        return props.theme.colors.secundary
    }
  }};

  svg,
  img {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const FormControlContainer = styled(FormControl)`
  width: 20rem;

  & .MuiInputLabel-root {
    color: ${(props) => props.theme.colors.primary}; // Cor do label padrão
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${(props) =>
      props.theme.colors.secundary}; // Cor do label quando focado
  }

  & .MuiInput-underline:before {
    border-bottom-width: 2px;
    border-bottom-color: ${(props) =>
      props.theme.colors.primary}; // Cor da borda padrão
  }

  & .MuiInput-underline:hover:before {
    border-bottom-color: ${(props) =>
      props.theme.colors
        .primary}; // Cor da borda quando o mouse passa sobre o campo
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${(props) =>
      props.theme.colors.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover {
    border-bottom-width: 3px;
    border-bottom-color: ${(props) =>
      props.theme.colors.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${(props) =>
      props.theme.colors
        .secundary}; // Cor da borda quando o mouse passa sobre o campo
  }

  input {
    color: ${(props) => props.theme.colors.secundary};
  }

  button svg {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.colors.primary};
    width: 1.5rem;
    height: 1.5rem;
  }
`
