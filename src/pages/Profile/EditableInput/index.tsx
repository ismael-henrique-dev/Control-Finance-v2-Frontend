import { ReactNode } from "react"
import { ContainerInput } from "./styles"

interface EditableInputProps {
  children?: ReactNode
}

export function EditableInputContainer({
  children,
}: EditableInputProps) {
  return (
    <ContainerInput>
      <div>
        
        {children}
      </div>
      {/* <Pencil /> */}
    </ContainerInput>
  )
}
