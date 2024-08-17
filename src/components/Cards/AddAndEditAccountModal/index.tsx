import InputLabel from "@mui/material/InputLabel";
import { ModalBase } from "../../ModalBase";
import { TextFiled } from "../../TextField";
import Input from "@mui/material/Input";
import SelectVariants from "../../ModalBase/SelectField";

export function AddAndEditAccountModal() {
  return (
    <ModalBase submitButtonTitle="Adicionar">
      
      <SelectVariants title="Categoria" />
      <SelectVariants title="Data" />
      <SelectVariants title="Conta" />
      <SelectVariants title="Tipo de transação" />
    </ModalBase>
  )
}