import Select from "@mui/material/Select"
import FormControl from "@mui/material/FormControl"
import { styled, useTheme } from "styled-components"
import { styled as muiStyled } from "@mui/system"
import MenuItem from "@mui/material/MenuItem"

export const FormControlContainer = styled(FormControl)`
  width: 26rem;

  & .MuiInputLabel-root {
    width: 90%;
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

  svg {
    margin-bottom: 0.25rem;
    color: ${(props) => props.theme.primary};
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    & {
      width: 17rem;
    }
  }
`

export const SelectCustom = styled(Select)`
  color: ${(props) => props.theme.text};
`

export const useStyledMenuProps = () => {
  const theme = useTheme()

  return {
    PaperProps: {
      style: {
        backgroundColor: theme.secundaryGray, // Fundo do menu usando a cor do tema
      },
    },
    MenuListProps: {
      style: {
        backgroundColor: theme.primaryGray, // Fundo da lista usando a cor do tema
      },
    },
  }
}

export const StyledMenuItem = muiStyled(MenuItem)`
  color: #6a5acd;
  background-color: transparent;

  &:focus {
    background-color: #6a5acd;
  }

  &:hover {
    background-color: #5549a7;
  }

  &.Mui-selected {
    background-color: #6a5acd;
    color: #fff;
  }
`