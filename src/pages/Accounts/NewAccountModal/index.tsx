import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm } from "react-hook-form"
import { useContext } from "react"
import { AccountsContext } from "../../../contexts/accountsContext"

interface NewAccountProps {
  Name: string
  Value: number
  Type: "Carteira"
  Description: string
}

export function NewAccountModaL({ open, handleClose }: ModalBasePropsDefault) {
  const { createAccount } = useContext(AccountsContext)
  const data = [
    "Carteira",
    "Conta Bancária",
    "Poupança",
    "Corretora de investimentos",
  ]

  const { register, handleSubmit } = useForm<NewAccountProps>({
    mode: "onSubmit",
  })

  async function handleCreateAccount(accountData: NewAccountProps) {
    console.log(accountData) // Debug: Verificar os dados
    const { Name, Value, Type, Description } = accountData

    await createAccount({ Name, Value, Type, Description })
  }

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Criar nova conta"
      submit={handleSubmit(handleCreateAccount)}
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

      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-type">Tipo de conta</InputLabel>
        <Input
          type="text"
          id="account-type"
          {...register("Type")}
          error={false}
        />
      </TextFiled>

      {/* Use este Select ao invés do Input acima para o Type */}
      {/* <SelectVariants title="Tipo de conta" {...register("Type")} data={data} /> */}

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
