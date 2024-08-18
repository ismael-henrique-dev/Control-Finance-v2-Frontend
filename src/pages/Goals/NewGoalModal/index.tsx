import InputLabel from "@mui/material/InputLabel";
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase";
import { TextFiled } from "../../../components/TextField";
import Input from "@mui/material/Input";
import SelectVariants from "../../../components/ModalBase/SelectField";

export function NewGoalModal({open, handleClose}:ModalBasePropsDefault) {
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
        <InputLabel htmlFor="standard-adornment-password"></InputLabel>
        <Input type="date" error={false} />
      </TextFiled>
      <SelectVariants title="Categoria" />
    </ModalBase>
  )
}