import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm, Controller } from "react-hook-form"
import { useContext } from "react"
import SelectVariants from "../../../components/ModalBase/SelectField"
import { AccountsContext, UpdatedData } from "../../../contexts/accountsContext"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidateSelectArea } from "../../../components/TextField/styles"

interface EditModalProps extends ModalBasePropsDefault {
  AccountId: string
}

export const accoutTypes = [
  "Carteira",
  "ContaBancaria",
  "Poupanca",
  "CorretoraDeInvestimentos",
]

const updatedAccountFormSchema = z.object({
  Name: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  Description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
  Type: z.enum(
    ["Carteira", "ContaBancaria", "Poupanca", "CorretoraDeInvestimentos"],
    {
      errorMap: () => ({ message: "Selecione um tipo de conta válido." }),
    }
  ),
})

type UpdatedAccountFormSchema = z.infer<typeof updatedAccountFormSchema>

export function EditAccountModaL({
  open,
  handleClose,
  AccountId,
}: EditModalProps) {
  const { updateAccount } = useContext(AccountsContext)

  const { register, handleSubmit, control, formState } =
    useForm<UpdatedAccountFormSchema>({
      mode: "onChange",
      resolver: zodResolver(updatedAccountFormSchema),
    })

  async function handleUpdatedAccount(accountData: UpdatedData) {
    const { Name, Description, Type } = accountData

    await updateAccount(AccountId, {
      Name,
      Description,
      Type,
    })
  }

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Editar nova conta"
      submit={handleSubmit(handleUpdatedAccount)}
      type="updatedAccount"
      erros={!formState.isValid}
    >
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-name">Nome da conta</InputLabel>
        <Input
          type="text"
          id="account-name"
          {...register("Name")}
          error={false}
        />
        {formState.errors.Name && <p>{formState.errors.Name.message}</p>}
      </TextFiled>

      <Controller
        name="Type"
        control={control}
        render={({ field }) => (
          <ValidateSelectArea>
            <SelectVariants
              title="Tipo de conta"
              data={accoutTypes}
              value={field.value}
              onChange={field.onChange}
              erros={!!formState.errors.Type}
            />
            {formState.errors.Type && <p>{formState.errors.Type.message}</p>}
          </ValidateSelectArea>
        )}
      />

      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-description">Descrição</InputLabel>
        <Input
          type="text"
          id="account-description"
          {...register("Description")}
          error={false}
        />
        {formState.errors.Description && (
          <p>{formState.errors.Description.message}</p>
        )}
      </TextFiled>
    </ModalBase>
  )
}
