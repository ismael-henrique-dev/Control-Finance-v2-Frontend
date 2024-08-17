import { ReactNode } from "react"
import { FormControlContainer } from "./styles"

interface TextFieldProps {
  variant?: "standard"
  children: ReactNode
  formControlWidth?: string
}

export function TextFiled({ variant, children, formControlWidth }: TextFieldProps) {
  return (
    <FormControlContainer sx={{width: formControlWidth}} variant={variant}>{children}</FormControlContainer>
  )
}
