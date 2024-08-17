import InputLabel from "@mui/material/InputLabel"
import { ModalBase } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import SelectVariants from "../../../components/ModalBase/SelectField"

interface NewTransactionModal {
  open: boolean
  handleClose: () => void
}

export function NewTransactionModal({ open, handleClose }: NewTransactionModal) {
  return (
    <ModalBase open={open} handleClose={handleClose} submitButtonTitle="Adicionar nova transação">
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="standard-adornment-password">
          Nome da transação
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <SelectVariants title="Categoria" />
      <SelectVariants title="Data" />
      <SelectVariants title="Conta" />
      <SelectVariants title="Tipo de transação" />
    </ModalBase>
  )
}
