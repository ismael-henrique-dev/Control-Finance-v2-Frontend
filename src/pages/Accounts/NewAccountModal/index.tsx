import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm, Controller } from "react-hook-form"
import { useContext } from "react"
import { AccountsContext } from "../../../contexts/accountsContext"
import SelectVariants from "../../../components/ModalBase/SelectField"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import CurrencyInput from "react-currency-input-field"
import { ValidateSelectArea } from "../../../components/TextField/styles"

export const accoutTypes = [
  "Carteira",
  "ContaBancaria",
  "Poupanca",
  "CorretoraDeInvestimentos",
]

const createAccountFormSchema = z.object({
  Name: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  Value: z.number(),
  Type: z.enum([
    "Carteira",
    "ContaBancaria",
    "Poupanca",
    "CorretoraDeInvestimentos",
  ], {
    errorMap: () => ({ message: "Selecione um tipo de conta válido." })
  }),
  Description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
})

type CreateAccountFormSchema = z.infer<typeof createAccountFormSchema>

export function NewAccountModaL({ open, handleClose }: ModalBasePropsDefault) {
  const { createAccount } = useContext(AccountsContext)

  const { register, handleSubmit, control, formState } = useForm<CreateAccountFormSchema>({
    mode: "onChange",
    resolver: zodResolver(createAccountFormSchema),
  })

  async function handleCreateAccount(accountData: CreateAccountFormSchema) {
    const { Name, Value, Type, Description } = accountData

    await createAccount({ Name, Value, Type, Description })
    handleClose()
  }

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Criar nova conta"
      submit={handleSubmit(handleCreateAccount)}
      erros={!formState.isValid}
      type="createAccount"
      inputValue={
        <Controller
          name="Value"
          control={control}
          render={({ field }) => (
            <CurrencyInput
              defaultValue={0}
              id="account-initial-value"
              intlConfig={{ locale: "pt-BR", currency: "BRL" }}
              decimalSeparator=","
              groupSeparator="."
              value={field.value}
              onValueChange={(value) => {
                const numericValue = value
                  ? parseFloat(value.replace(/[^\d.-]/g, ""))
                  : 0
                field.onChange(numericValue)
              }}
            />
          )}
        />
      }
    >
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-name" error={!!formState.errors.Name}>
          Nome da conta
        </InputLabel>
        <Input
          type="text"
          id="account-name"
          {...register("Name")}
          error={!!formState.errors.Name}
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
              onChange={field.onChange}
              value={field.value}
              erros={!!formState.errors.Type}
            />
            {formState.errors.Type && <p>{formState.errors.Type.message}</p>}
          </ValidateSelectArea>
        )}
      />

      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel
          htmlFor="account-description"
          error={!!formState.errors.Description}
        >
          Descrição
        </InputLabel>
        <Input
          type="text"
          id="account-description"
          {...register("Description")}
          error={!!formState.errors.Description}
        />
        {formState.errors.Description && (
          <p>{formState.errors.Description.message}</p>
        )}
      </TextFiled>
    </ModalBase>
  )
}
