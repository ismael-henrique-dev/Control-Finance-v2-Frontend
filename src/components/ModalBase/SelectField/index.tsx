import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ChevronDown } from "lucide-react"
import { FormControlContainer } from "./styles"
import { useState } from "react"

interface SelectProps {
  title: string
  data: string[]
}

export default function SelectVariants({ title, data = [] }: SelectProps) {
  const [selectData, setSelectData] = useState<string>("")

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSelectData(event.target.value)
  }

  return (
    <div>
      <FormControlContainer variant="standard">
        <InputLabel id="demo-simple-select-standard-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={selectData}
          onChange={handleChange}
          label={title}
          IconComponent={ChevronDown}
          sx={{ color: "#4C3299", width: "100%" }}
        >
          <MenuItem value="">
            <em>{title}</em>
          </MenuItem>
          {data.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControlContainer>
    </div>
  )
}
