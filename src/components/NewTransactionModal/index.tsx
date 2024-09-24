import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"
import { styled } from "styled-components"
import { useContext, useEffect, useState } from "react"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import { Controller, useForm } from "react-hook-form"
import {
  Transaction,
  TransactionsContext,
} from "../../contexts/transactionsContext"
import { AccountsContext } from "../../contexts/accountsContext"
import CurrencyInput from "react-currency-input-field"

const StyledInput = styled(Input)`
  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      opacity: 0;
      display: none;
    }
    &::-webkit-inner-spin-button,
    &::-webkit-clear-button {
      display: none;
    }
    &::-moz-clear {
      display: none;
    }
  }
`

interface NewTransactionModal {
  open: boolean
  handleClose: () => void
}

export function NewTransactionModal({
  open,
  handleClose,
}: ModalBasePropsDefault) {
  const [categories, setCategories] = useState<string[]>([])
  const { createTransaction } = useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)
  const { register, handleSubmit, setValue, watch } = useForm<Transaction>()

  const { control, formState } = useForm()

  const type = watch("Type", "income") // Watching Type to update categories based on the selected type

  useEffect(() => {
    const newCategories = fetchCategories(type)
    setCategories(newCategories)
    setValue("categories", "") // Reset categories when type changes
  }, [type, setValue])

  const fetchCategories = (type: string) => {
    switch (type) {
      case "income":
        return ["Salário", "Investimento", "Comissão", "Outro"]
      case "outcome":
        return [
          "Alimentação",
          "Educação",
          "Laser",
          "Saúde",
          "Eletrônicos",
          "Compras",
          "Beleza",
          "Veículo",
          "Roupas",
        ]
      default:
        return []
    }
  }

  async function handleCreateTransaction(data: Transaction) {
    const { Title, Value, Type, categories } = data
    console.log(data)
    await createTransaction({ Title, Value, Type, categories })
  }

  return (
    <ModalBase
      type="createAccount"
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
      submit={handleSubmit(handleCreateTransaction)}
      erros={!formState.isValid}
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
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="transaction-name">Nome da transação</InputLabel>
        <Input
          type="text"
          id="transaction-name"
          {...register("Title")}
          error={false}
        />
      </TextFiled>

      {/* Select for Transaction Type */}
      <SelectVariants
        title="Tipo de transação"
        data={["income", "outcome"]}
        selectedValue={type}
        onChange={(value) => setValue("Type", value as "income" | "outcome")}
      />

      {/* Select for Category */}
      <SelectVariants
        title="Categoria"
        data={categories}
        selectedValue={watch("categories")}
        disabled={categories.length === 0}
        onChange={(value) => setValue("categories", value)}
      />

      {/* <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="transaction-value">Valor</InputLabel>
        <StyledInput
          type="number"
          id="transaction-value"
          {...register("Value", { valueAsNumber: true })}
          error={false}
          endAdornment={
            <InputAdornment position="end">
              <Calendar color="#4C3299" size={20} />
            </InputAdornment>
          }
        />
      </TextFiled> */}

      {/* Select for Account -> Arrumar para que ele receba o nome da conta e passe o id */}
      <SelectVariants
        title="Conta"
        data={accountsList}
        selectedValue={watch("AccountType")}
        onChange={(value) => setValue("AccountType", value)}
      />
    </ModalBase>
  )
}
