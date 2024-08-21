import InputLabel from "@mui/material/InputLabel";
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase";
import SelectVariants from "../../../components/ModalBase/SelectField";
import { TextFiled } from "../../../components/TextField";
import Input from "@mui/material/Input";

export function NewAccountModaL({open, handleClose}:ModalBasePropsDefault) {
  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Criar nova conta"
    >
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="accountName">
          Nome da conta
        </InputLabel>
        <Input type="email" id="accountName" error={false} />
      </TextFiled>
      <SelectVariants title="Tipo de conta" />
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Descrição
        </InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
    </ModalBase>
  )
}