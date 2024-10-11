import styled from "styled-components"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import { Calendar } from "lucide-react"
import InputLabel from "@mui/material/InputLabel"
import {
  ModalBase,
  ModalBasePropsDefault,
} from "../../../components/form/NewTransactionModal/ModalBase"
import { TextFiled } from "../../../components/form/TextField"
import { Controller, useForm } from "react-hook-form"
import CurrencyInput from "react-currency-input-field"
import {
  CreateGoalFormData,
  createGoalFormSchema,
} from "../../../schemas/CreateGoalFormSchema"
import { useContext } from "react"
import { GoalsContext } from "../../../contexts/goalsContext"
import { zodResolver } from "@hookform/resolvers/zod"

// Estilizar o Input para esconder o ícone padrão
export const StyledInput = styled(Input)`
  input[type="date"] {
    &::-webkit-calendar-picker-indicator {
      opacity: 1;
      display: block;
      color: #4c3299; /* Esconder o ícone padrão */
    }
    &::-webkit-inner-spin-button,
    &::-webkit-clear-button {
      display: none; /* Esconder os botões de spin no Chrome */
    }
    &::-moz-clear {
      display: none; /* Esconder o botão clear no Firefox */
    }
  }
`

export function GoalModal({ open, handleClose }: ModalBasePropsDefault) {
  const { createGoal } = useContext(GoalsContext)
  const { register, handleSubmit, control, formState } =
    useForm<CreateGoalFormData>({
      resolver: zodResolver(createGoalFormSchema),
    })

  async function handleCreateGoal(data: CreateGoalFormData) {
    console.log(data)
    await createGoal(data)
    handleClose()
  }

  return (
    <ModalBase
      submit={handleSubmit(handleCreateGoal)}
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Criar nova meta"
      type="createAccount"
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
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Nome da meta
        </InputLabel>
        <Input type="text" {...register("Title")} error={false} />
      </TextFiled>
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          Valor final
        </InputLabel>
        <Input
          type="number"
          {...register("TargetedValue", { valueAsNumber: true })}
          error={false}
        />
      </TextFiled>
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="standard-adornment-password" />
        <StyledInput
          type="date"
          error={false}
          {...register("EndTime")}
          endAdornment={
            <InputAdornment position="end">
              <Calendar color="#4C3299" size={20} />
            </InputAdornment>
          }
        />
      </TextFiled>
    </ModalBase>
  )
}
