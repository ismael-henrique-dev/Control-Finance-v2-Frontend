import InputLabel from "@mui/material/InputLabel";
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase";
import { TextFiled } from "../../../components/TextField";
import Input from "@mui/material/Input";
import SelectVariants from "../../../components/ModalBase/SelectField";

export function NewDepositOfGoal({open, handleClose}:ModalBasePropsDefault) {
  return (
    <ModalBase open={open} handleClose={handleClose} submitButtonTitle="Novo depósito">
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Nome do depósito
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <SelectVariants title="Conta" />
    </ModalBase>
  )
}