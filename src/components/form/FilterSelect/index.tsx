import { ChevronDown } from "lucide-react"
import { ContainerFilterSelect, FormControlContainer, StyledMenuItem, useStyledMenuProps } from "./styles"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"

interface SelectFilterProps {
  data: string[]
  value: string
  change: (event: SelectChangeEvent) => void
}

export function SelectFilter({data = [], change, value}:SelectFilterProps) {
  const menuProps = useStyledMenuProps()

  return (
    <ContainerFilterSelect>
      <FormControlContainer variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Filtrar</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={change}
          label="filtar"
          IconComponent={ChevronDown}
          sx={{ color: "#6741D9", width: "100%" }}
          MenuProps={menuProps}
        >
          {data.map((item, index) => (
            <StyledMenuItem key={index} value={item}>
              {item}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControlContainer>
    </ContainerFilterSelect>
  )
}
