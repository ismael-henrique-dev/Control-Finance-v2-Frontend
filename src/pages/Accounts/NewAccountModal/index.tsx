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

export const accoutTypes = [
  "Carteira",
  "ContaBancaria",
  "Poupanca",
  "CorretoraDeInvestimentos",
]

const createAccountFormSchema = z.object({
  Name: z.string().min(3, "O nome deve conter no mínimo 03 caracteres."),
  Value: z.number().min(0.1, "No mínimo R$ 1,00."),
  Type: z.string(),
  Description: z.string(),
})

type CreateAccountFormSchema = z.infer<typeof createAccountFormSchema>

export function NewAccountModaL({ open, handleClose }: ModalBasePropsDefault) {
  const { createAccount } = useContext(AccountsContext)

  const { register, handleSubmit, control, formState } = useForm<CreateAccountFormSchema>({
    mode: "onSubmit",
    resolver: zodResolver(createAccountFormSchema),
  })

  async function handleCreateAccount(accountData: CreateAccountFormSchema) {
    console.log(accountData) // Debug: Verificar os dados
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
          <SelectVariants
            title="Tipo de conta"
            data={accoutTypes}
            onChange={field.onChange}
            value={field.value}
          />
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
      </TextFiled>
    </ModalBase>
  )
}
