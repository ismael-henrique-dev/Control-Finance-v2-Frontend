import { ReactNode } from "react"
import { FormControlContainer } from "./styles"

interface TextFieldProps {
  variant?: "standard"
  children: ReactNode
}

export function TextFiled({ variant, children }: TextFieldProps) {
  return (
    <FormControlContainer variant={variant}>{children}</FormControlContainer>
  )
}
