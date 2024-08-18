import { Select, MenuItem } from "@mui/material"
import { styled, useTheme } from "styled-components"
import { styled as muiStyled } from "@mui/system"


export const StyledSelect = styled(Select)`
  .MuiSelect-select {
    color: #6a5acd;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding-bottom: 0;
    /* margin-top: -12px; */
    /* margin-bottom: 1rem; */
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-icon {
    color: #6a5acd;
    width: 2rem;
    height: 2rem;
    display: flex;
    margin-right: -20px;
  }
`

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
export const StyledMenuProps = () => {
  const theme = useTheme()

  return {
    PaperProps: {
      style: {
        backgroundColor: theme.green, // Fundo do menu do tema
      },
    },
    MenuListProps: {
      style: {
        backgroundColor: theme.green, // Fundo da lista do tema
      },
    },
  }
}
