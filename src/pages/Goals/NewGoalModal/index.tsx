import styled from "styled-components"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import { Calendar } from "lucide-react"
import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import SelectVariants from "../../../components/ModalBase/SelectField"

// Estilizar o Input para esconder o ícone padrão
const StyledInput = styled(Input)`
  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
      display: none; /* Esconder o ícone padrão */
    }
    &::-webkit-inner-spin-button,
    &::-webkit-clear-button {
      display: none; /* Esconder os botões de spin no Chrome */
    }
    &::-moz-clear {
      display: none; /* Esconder o botão clear no Firefox */
    }
  }
`

export function GoalModal({ open, handleClose }: ModalBasePropsDefault) {
  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Criar nova meta"
    >
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Nome da meta
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Valor final
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password" />
        <StyledInput
          type="date"
          error={false}
          endAdornment={
            <InputAdornment position="end">
              <Calendar color="#4C3299" size={20} />
            </InputAdornment>
          }
        />
      </TextFiled>
      <SelectVariants title="Categoria" />
    </ModalBase>
  )
}
