import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"
import { styled } from "styled-components"
import InputAdornment from "@mui/material/InputAdornment"
import { Calendar } from "lucide-react"
import { useContext, useEffect, useState } from "react"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import { useForm } from "react-hook-form"
import {
  Transaction,
  TransactionsContext,
} from "../../contexts/transactionsContext"
import { accoutTypes } from "../../pages/Accounts/NewAccountModal"

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
  const { register, handleSubmit, setValue, watch } = useForm<Transaction>()

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
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
      submit={handleSubmit(handleCreateTransaction)}
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

      {/* Select for Account */}
      <SelectVariants
        title="Conta"
        data={accoutTypes}
        selectedValue={watch("AccountType")}
        onChange={(value) => setValue("AccountType", value)}
      />
    </ModalBase>
  )
}
