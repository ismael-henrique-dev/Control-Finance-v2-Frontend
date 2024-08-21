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
  data?: string[] // alterar para obrigatorio
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
        <InputLabel
          sx={{ display: "flex", alignItems: "center" }}
          id="demo-simple-select-standard-label"
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
               // Adjust padding if needed
              color: "#4C3299",
            },
            "& svg": {
             marginBottom: "-0.3rem" // Adjust space between icon and text
            },
          }}
          MenuProps={menuProps}
        >
          {data.map((item, index) => (
            <StyledMenuItem key={index} value={item}>
              <div>
                <PiggyBank size={16} />
              </div>
              {item}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControlContainer>
    </div>
  )
}
