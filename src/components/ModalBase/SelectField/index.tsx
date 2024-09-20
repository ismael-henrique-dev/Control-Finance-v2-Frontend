import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { ChevronDown, PiggyBank } from "lucide-react"
import {
  FormControlContainer,
  StyledMenuItem,
  useStyledMenuProps,
} from "./styles"
import { useState } from "react"

interface SelectProps {
  title: string
  data: string[]
  selectedValue?: string
  onChange?: (value: string) => void
  disabled?: boolean
  erros: any
  value?: any
}

export default function SelectVariants({
  title,
  data = [],
  selectedValue = "",
  onChange,
  disabled = false,
  erros,
}: SelectProps) {
  const [selectData, setSelectData] = useState<string>(selectedValue)

  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
    setSelectData(value)
    if (onChange) onChange(value)
  }

  const menuProps = useStyledMenuProps()

  return (
    <div>
      <FormControlContainer
        variant="standard"
        disabled={disabled}
        error={erros}
      >
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
          value={selectData}
          onChange={handleChange}
          label={title}
          IconComponent={ChevronDown}
          sx={{
            width: "100%",
            "& .MuiSelect-select": {
              width: "100%",
              gap: "0.5rem",
              display: "flex",
              alignItems: "center",
              color: "#4C3299",
            },
            "& svg": {
              marginBottom: "-0.3rem",
              color: erros ? "#DC2626" : "#4C3299",
            },
          }}
          MenuProps={menuProps}
        >
          {data.map(
            (
              item,
              index
            ) => (
              <StyledMenuItem key={index} value={item}>
                <div>
                  <PiggyBank size={16} />
                </div>
                {item}
              </StyledMenuItem>
            )
          )}
        </Select>
      </FormControlContainer>
    </div>
  )
}
