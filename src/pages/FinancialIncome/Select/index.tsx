import { SelectChangeEvent } from "@mui/material"
import { ChevronDown } from "lucide-react"
import { StyledMenuItem, useStyledMenuProps, StyledSelect } from "./styles"

interface CustomSelectFilterProps {
  value: string
  change: (event: SelectChangeEvent<string>) => void
}

export function CustomSelect({ change, value }: CustomSelectFilterProps) {
  const menuProps = useStyledMenuProps()

  return (
    <StyledSelect
      value={value}
      onChange={change}
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
