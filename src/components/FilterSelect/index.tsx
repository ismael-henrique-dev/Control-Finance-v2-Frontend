import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { ContainerFilterSelect, FormControlContainer, StyledMenuItem, useStyledMenuProps } from "./styles"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"

interface SelectFilterProps {
  data?: string[]
}

export function SelectFilter({data = []}:SelectFilterProps) {
  const [selectData, setSelectData] = useState<string>("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectData(event.target.value)
  }

  const menuProps = useStyledMenuProps()

  return (
    <ContainerFilterSelect>
      <FormControlContainer variant="standard">
        <InputLabel id="demo-simple-select-standard-label">Filtrar</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectData}
          onChange={handleChange}
          label="filtar"
          IconComponent={ChevronDown}
          sx={{ color: "#6741D9", width: "100%" }}
          MenuProps={menuProps}
        >
          <StyledMenuItem value="">
            <em>Filter</em>
          </StyledMenuItem>
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
