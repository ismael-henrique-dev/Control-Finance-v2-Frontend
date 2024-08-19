import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"

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
    <ModalBase open={open} handleClose={handleClose} submitButtonTitle="Adicionar nova transação">
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="standard-adornment-password">
          Nome da transação
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <SelectVariants title="Categoria" data={categories.names}/>
      <SelectVariants title="Data" />
      <SelectVariants title="Conta" />
      <SelectVariants title="Tipo de transação" />
    </ModalBase>
  )
}
