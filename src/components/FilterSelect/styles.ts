import { FormControl } from "@mui/material"
import styled from "styled-components"

export const ContainerFilterSelect = styled.div`
  width: 10rem;
  height: 5.5rem;
  background-color: ${(props) => props.theme.primaryGray};
  color: ${(props) => props.theme.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 0.75rem;

  @media (max-width: 768px) {
    width: 20rem;
  }
`

export const FilterContainer = styled.div``

export const FormControlContainer = styled(FormControl)`
  width: 8rem;

  & .MuiInputLabel-root {
    width: 90%;
    color: ${(props) => props.theme.secundary}; // Cor do label padrão
    font-size: 1rem;
    font-weight: 600;
    font-family: "Inter";
  }

  & .MuiInputLabel-root.Mui-focused {
    color: ${(props) => props.theme.secundary}; // Cor do label quando focado
  }

  & .MuiInput-underline:before {
    border-bottom-width: 3px;
    border-bottom-color: ${(props) =>
      props.theme.secundary}; // Cor da borda padrão
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

  svg {
    margin-bottom: 0.6rem;
    color: ${(props) => props.theme.secundary};
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    & {
      width: 17rem;
    }
  }
`
