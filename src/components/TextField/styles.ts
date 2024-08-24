import FormControl from "@mui/material/FormControl"
import { styled } from "styled-components"

export const FormControlContainer = styled(FormControl)`
  width: 20rem;

  & .MuiInputLabel-root {
    color: ${(props) => props.theme.primary}; // Cor do label padrão
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.secundary}; // Cor do label quando focado
  }

  & .MuiInput-underline:before {
    border-bottom-width: 2px;
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda padrão
  }

  & .MuiInput-underline:hover:before {
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o mouse passa sobre o campo
  }

  & .MuiInput-underline:after {
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover {
    border-bottom-width: 3px;
    border-bottom-color: ${(props) =>
      props.theme.primary}; // Cor da borda quando o campo está focado
  }

  & .MuiInput-underline:hover:not(.Mui-disabled):before {
    border-bottom-color: ${(props) =>
      props.theme.secundary}; // Cor da borda quando o mouse passa sobre o campo
  }

  & .MuiFormHelperText-root {
    color: ${(props) => props.theme.red}; // Cor do texto de ajuda padrão
  }

  & .MuiFormControl-error .MuiInput-underline:before {
    border-bottom-color: ${(props) =>
      props.theme.red}; // Cor da borda quando há erro
  }

  & .MuiFormControl-error .MuiInput-underline:after {
    border-bottom-color: ${(props) =>
      props.theme.red}; // Cor da borda quando há erro
  }

  & .MuiFormHelperText-root.Mui-error {
    color: ${(props) => props.theme.red}; // Cor do texto de erro
  }

  input {
    color: ${(props) => props.theme.primary};
  }

  button svg {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.primary};
    width: 1.5rem;
    height: 1.5rem;
  }
`
