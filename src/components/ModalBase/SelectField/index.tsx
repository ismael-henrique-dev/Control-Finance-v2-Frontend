import * as React from "react"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ChevronDown } from "lucide-react"
import { FormControlContainer } from "./styles"

interface SelectProps {
  title: string

}

export default function SelectVariants({title}:SelectProps) {
  const [age, setAge] = React.useState("")

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value)
  }

  return (
    <div>
      <FormControlContainer variant="standard">
        <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
          IconComponent={ChevronDown}
          sx={{ color: "#4C3299" }}
        >
          <MenuItem value={title}>
            <em>{title}</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControlContainer>
    </div>
  )
}
