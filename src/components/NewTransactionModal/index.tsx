import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"
import { styled } from "styled-components"
import InputAdornment from "@mui/material/InputAdornment"
import { Calendar } from "lucide-react"
import { useEffect, useState } from "react"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import { useForm } from "react-hook-form"
import { Transaction } from "../../contexts/transactionsContext"

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
  const [type, setType] = useState<"income" | "outcome">("income")

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

  useEffect(() => {
    const newCategories = fetchCategories(type)
    setCategories(newCategories)
  }, [type])

  // form

  const {register, handleSubmit} = useForm<Transaction>()

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
    >
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="transaction-name">
          Nome da transação
        </InputLabel>
        <Input type="text" id="transaction-name" {...register("Title")} error={false} />
      </TextFiled>
      <SelectVariants
        title="Tipo de transação"
        data={["income", "outcome"]}
        selectedValue={type}
        onChange={(value) => setType(value as "income" | "outcome")}
      />
      <SelectVariants
        title="Categoria"
        data={categories}
        disabled={categories.length === 0}
      />
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="transaction-date" />
        <StyledInput
          type="date"
          id="transaction-date"
          {...register()}
          error={false}
          endAdornment={
            <InputAdornment position="end">
              <Calendar color="#4C3299" size={20} />
            </InputAdornment>
          }
        />
      </TextFiled>
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password" />
        <StyledInput
          type="number"
          error={false}
          endAdornment={
            <InputAdornment position="end">
              <Calendar color="#4C3299" size={20} />
            </InputAdornment>
          }
        />
      </TextFiled>
      <SelectVariants title="Conta" />
    </ModalBase>
  )
}
