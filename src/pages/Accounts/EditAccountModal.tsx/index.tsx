import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm, Controller } from "react-hook-form"
import { useContext } from "react"

import SelectVariants from "../../../components/ModalBase/SelectField"
import { AccountsContext, UpdatedData } from "../../../contexts/accountsContext"
import CurrencyInput from "react-currency-input-field"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

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
  Name: z.string().min(3, "O nome deve conter no mínimo 03 caracteres."),
  Value: z.number().min(0.1, "No mínimo R$ 1,00."),
  Description: z.string(),
  Type: z.string(),
})

type UpdatedAccountFormSchema = z.infer<typeof updatedAccountFormSchema>

export function EditAccountModaL({
  open,
  handleClose,
  AccountId,
}: EditModalProps) {
  const { updateAccount } = useContext(AccountsContext)

  const { register, handleSubmit, control } = useForm<UpdatedAccountFormSchema>(
    { resolver: zodResolver(updatedAccountFormSchema) }
  )

  async function handleUpdatedAccount(accountData: UpdatedData) {
    console.log("Dados atualizados")
    console.log(accountData) // Debug: Verificar os dados

    const { Name, Value, Description, Type } = accountData

    // Passando os dados atualizados para o contexto e realizando a atualização
    await updateAccount(AccountId, {
      Name,
      Value,
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
        <InputLabel htmlFor="account-name">Nome da conta</InputLabel>
        <Input
          type="text"
          id="account-name"
          {...register("Name")}
          error={false}
        />
      </TextFiled>

      {/* Componente Select configurado com Controller para capturar o valor corretamente */}
      <Controller
        name="Type"
        control={control}
        render={({ field }) => (
          <SelectVariants
            title="Tipo de conta"
            data={accoutTypes}
            value={field.value}
            onChange={field.onChange}
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
