import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"
import { styled } from "styled-components"
import InputAdornment from "@mui/material/InputAdornment"
import { Calendar } from "lucide-react"

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

interface NewTransactionModal {
  open: boolean
  handleClose: () => void
}

// example

const categories = {
  names: ["maca", "banana", "uva", "pera"],
}

export function NewTransactionModal({ open, handleClose }: ModalBasePropsDefault) {
  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
    >
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="standard-adornment-password">
          Nome da transação
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <SelectVariants title="Categoria" data={categories.names} />
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
      <SelectVariants title="Conta" />
      <SelectVariants title="Tipo de transação" />
    </ModalBase>
  )
}
