import { ReactNode } from "react"
import { ChevronDown } from "lucide-react"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import {
  FormControlContainer,
  SelectFieldStyle,
  StyledMenuItem,
  useStyledMenuProps,
} from "./styles"

interface SelecetDataProps {
  name: string
  type: string
  icon: ReactNode
}

interface SelectProps {
  title: string
  data: SelecetDataProps[]
  value: string // Alterado para passar diretamente o valor controlado pelo pai
  onChange?: (value: string) => void
  disabled?: boolean
  erros: any
}

export default function SelectVariants({
  title,
  data = [],
  value, // Usando diretamente o valor recebido via props
  onChange,
  disabled = false,
  erros,
}: SelectProps) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value
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
          value={value} // Agora está recebendo o valor diretamente das props
          onChange={handleChange}
          label={title}
          IconComponent={ChevronDown}
          sx={SelectFieldStyle}
          MenuProps={menuProps}
        >
          {data.map((item, index) => (
            <StyledMenuItem key={index} value={item.type}>
              <div>{item.icon}</div>
              {item.name}
            </StyledMenuItem>
          ))}
        </Select>
      </FormControlContainer>
    </div>
  )
}
