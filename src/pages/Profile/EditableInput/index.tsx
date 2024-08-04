import { Pencil } from "lucide-react"
import { ContainerInput } from "./styles"
import { ChangeEvent, ReactElement, useState } from "react"

interface EditableInputProps {
  initialValue: string
  svgIcon: ReactElement
  type: "email" | "text" | "password"
}

export function EditableInput({
  type,
  initialValue,
  svgIcon,
}: EditableInputProps) {
  const [value, setValue] = useState(initialValue)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  return (
    <ContainerInput>
      <div>
        {svgIcon}
        <input type={type} value={value} onChange={handleChange} />
      </div>
      <Pencil />
    </ContainerInput>
  )
}
