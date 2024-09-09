import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm, Controller } from "react-hook-form"
import { useContext } from "react"

import SelectVariants from "../../../components/ModalBase/SelectField"
import { AccountsContext, UpdatedData } from "../../../contexts/accountsContext"

interface NewAccountProps {
  Name: string
  Value: number
  Type: string // Ajuste para string para permitir outros tipos além de "Carteira"
  Description: string
}

interface EditModalProps extends ModalBasePropsDefault {
  AccountId: string
}

export const accoutTypes = [
  "Carteira",
  "ContaBancaria",
  "Poupanca",
  "CorretoraDeInvestimentos",
]

export function EditAccountModaL({
  open,
  handleClose,
  AccountId,
}: EditModalProps) {
  const { updateAccount } = useContext(AccountsContext)

  const { register, handleSubmit, control } = useForm<UpdatedData>({
    mode: "onSubmit",
  })

  async function handleUpdatedAccount(accountData: UpdatedData) {
    console.log("Dados atualizados")
    console.log(accountData) // Debug: Verificar os dados
    const { Name, Value, Description, Type } = accountData

    await updateAccount(AccountId, { Name, Value, Description, Type })
  }

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Editar nova conta"
      submit={handleSubmit(handleUpdatedAccount)}
      inputValue={
        <input
          type="text"
          id="account-initial-value"
          placeholder="R$: 0,00"
          min={1}
          {...register("Value", { valueAsNumber: true })}
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
