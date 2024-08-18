import { useState } from "react"
import { ContainerFilterSelect, FormControlContainer } from "./styles"
import { ChevronDown, Filter } from "lucide-react"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import InputLabel from "@mui/material/InputLabel"
import { MenuItem } from "@mui/material"

export function SelectFilter() {
  const [selectData, setSelectData] = useState<string>("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectData(event.target.value)
  }

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
        >
          <MenuItem value="">
            <em>Filter</em>
          </MenuItem>
        </Select>
      </FormControlContainer>
    </ContainerFilterSelect>
  )
}
