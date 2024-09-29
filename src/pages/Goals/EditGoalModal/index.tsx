import { useContext } from "react"
import { GoalsContext } from "../../../contexts/goalsContext"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { UpdateGoalFormData, updateGoalFormSchema } from "../../../schemas/UpdateGoalFormSchema"
import { TextFiled } from "../../../components/TextField"
import { Input, InputAdornment, InputLabel } from "@mui/material"
import { Calendar } from "lucide-react"
import { StyledInput } from "../NewGoalModal"
import CurrencyInput from "react-currency-input-field"

interface EditGoalProps extends ModalBasePropsDefault {
  goalId: string
}

export function EditGoalModal({ open, handleClose, goalId }: EditGoalProps) {
  const { updateGoal } = useContext(GoalsContext)
  const { control, register,handleSubmit, formState } = useForm<UpdateGoalFormData>({
    resolver: zodResolver(updateGoalFormSchema),
  })

  async function handleUpdateGoal(data: UpdateGoalFormData) {
    console.log(data)
    await updateGoal(goalId, data)
  }

  return (
    <ModalBase
      submit={handleSubmit(handleUpdateGoal)}
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
