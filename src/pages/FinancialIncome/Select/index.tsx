import React from "react"
import { SelectChangeEvent } from "@mui/material"
import { ChevronDown } from "lucide-react"
import { StyledMenuItem, useStyledMenuProps, StyledSelect } from "./styles"

export function CustomSelect() {
  const [value, setValue] = React.useState<string>("mensal")

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  const menuProps = useStyledMenuProps()

  return (
    <StyledSelect
      value={value}
      onChange={handleChange}
      displayEmpty
      IconComponent={ChevronDown}
      MenuProps={menuProps}
    >
      <StyledMenuItem value="mensal">Rendimento Mensal</StyledMenuItem>
      <StyledMenuItem value="anual">Rendimento Anual</StyledMenuItem>
      <StyledMenuItem value="semanal">Rendimento Semanal</StyledMenuItem>
    </StyledSelect>
  )
}
