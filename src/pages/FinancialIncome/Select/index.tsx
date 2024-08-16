import React from "react"
import { SelectChangeEvent } from "@mui/material"

import { ChevronDown } from "lucide-react"
import { StyledMenuItem, StyledMenuProps, StyledSelect } from "./styles"

// const StyledSelect = styled(Select)`
//   .MuiSelect-select {
//     color: #6a5acd;
//     font-weight: 600;
//     font-size: 1.5rem;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 80px;
//   }

//   .MuiOutlinedInput-notchedOutline {
//     border: none;
//   }

//   .MuiSelect-icon {
//     color: #6a5acd;
//     width: 2rem;
//     height: 2rem;
//     display: flex;
//     margin-top: -8px;
//     margin-right: -20px;
//   }
// `

// const StyledMenuItem = styled(MenuItem)`
//   color: #6a5acd;
//   background-color: transparent;

//   &:focus {
//     background-color: #6a5acd;
//   }

//   &:hover {
//     background-color: #5549a7;
//   }

//   &.Mui-selected {
//     background-color: #6a5acd;
//     color: #fff;
//   }
// `

// const StyledMenuProps = {
//   PaperProps: {
//     style: {
//       backgroundColor: "#000", // Definir o fundo do menu como preto
//     },
//   },
//   MenuListProps: {
//     style: {
//       backgroundColor: "#000", // Definir o fundo da lista como preto
//     },
//   },
// }

export function CustomSelect() {
  const [value, setValue] = React.useState<string>("mensal")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      displayEmpty
      IconComponent={ChevronDown}
      MenuProps={StyledMenuProps}
    >
      <StyledMenuItem value="mensal">Rendimento Mensal</StyledMenuItem>
      <StyledMenuItem value="anual">Rendimento Anual</StyledMenuItem>
      <StyledMenuItem value="semanal">Rendimento Semanal</StyledMenuItem>
    </StyledSelect>
  )
}
