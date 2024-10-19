import Input from "@mui/material/Input"
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
} from "../../../schemas/goal/CreateGoalFormSchema"
import { useContext } from "react"
import { GoalsContext } from "../../../contexts/Goals/goalsContext"
import { zodResolver } from "@hookform/resolvers/zod"

export function GoalModal({ open, handleClose }: ModalBasePropsDefault) {
  const { createGoal } = useContext(GoalsContext)
  const { register, handleSubmit, control, formState } =
    useForm<CreateGoalFormData>({
      resolver: zodResolver(createGoalFormSchema),
    })

  async function handleCreateGoal(data: CreateGoalFormData) {
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
        <Input
          type="text"
          {...register("Title")}
          error={!!formState.errors.Title}
        />
        {formState.errors.Title && <p>{formState.errors.Title.message}</p>}{" "}
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
        <Input type="date" error={false} {...register("EndTime")} />
      </TextFiled>
    </ModalBase>
  )
}
