import { ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import {
  FormControlContainer,
  SelectFieldStyle,
  useStyledMenuProps,
} from "./styles"

interface SelectProps {
  title: string
  value: string
  onChange: (value: string) => void
  erros: any
  children?: ReactNode
}

export default function SelectVariants({
  title,
  value,
  onChange,
  erros,
  children,
}: SelectProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    if (onChange) onChange(value)
  }

  const menuProps = useStyledMenuProps()

  return (
    <div>
      <FormControlContainer variant="standard" error={erros}>
        <InputLabel
          sx={{ display: "flex", alignItems: "center" }}
          id="demo-simple-select-standard-label"
          error={erros}
        >
          {title}
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleChange}
          label={title}
          IconComponent={ChevronDown}
          sx={SelectFieldStyle}
          MenuProps={menuProps}
        >
          {children}
        </Select>
      </FormControlContainer>
    </div>
  )
}
