import React from "react"
import { Select, MenuItem, SelectChangeEvent } from "@mui/material"
import { styled } from "@mui/system"
import { ChevronDown } from "lucide-react"

const StyledSelect = styled(Select)`
  background-color: transparent; // Adicione esta linha
  .MuiSelect-select {
    color: #6a5acd;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 80px;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-icon {
    color: #6a5acd;
    width: 2rem;
    height: 2rem;
    display: flex;
    margin-top: -8px;
    margin-right: -20px;
  }

  &.MuiSelect-root {
    padding: 10px;
    border-radius: 8px;
    color: #37305f;
    font-size: 16px;
    background-color: transparent; // Adicione esta linha

    ul {
      background-color: #333;
    }

    &:focus {
      background-color: #333;
      border-radius: 8px;
    }
  }
`

const StyledMenuItem = styled(MenuItem)`
  color: #6a5acd;
  background-color: #333;
  background-color: transparent; // Adicione esta linha
  &:hover,
  &:focus {
    background-color: #6a5acd;
  }

  &.Mui-selected {
    background-color: #6a5acd;
    color: #fff;
  }
`

export function CustomSelect() {
  const [value, setValue] = React.useState<string>("")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      displayEmpty
      IconComponent={ChevronDown}
      
    >
      <StyledMenuItem value="mensal">Rendimento Mensal</StyledMenuItem>
      <StyledMenuItem value="anual">Rendimento Anual</StyledMenuItem>
      <StyledMenuItem value="semanal">Rendimento Semanal</StyledMenuItem>
    </StyledSelect>
  )
}
