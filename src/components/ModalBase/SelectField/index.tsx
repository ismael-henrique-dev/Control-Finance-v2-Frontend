import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ChevronDown } from "lucide-react"
import { FormControlContainer, StyledMenuItem, useStyledMenuProps } from "./styles"
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

  const menuProps = useStyledMenuProps()

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
          MenuProps={menuProps}
        >
          <StyledMenuItem value="">
            <em>{title}</em>
          </StyledMenuItem>
          {data.map((item, index) => (
            <StyledMenuItem key={index} value={item}>
              {item}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControlContainer>
    </div>
  )
}
