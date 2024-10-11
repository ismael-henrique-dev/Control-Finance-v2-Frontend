import { useContext } from "react"
import { GoalsContext } from "../../../contexts/Goals/goalsContext"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ModalBase,
  ModalBasePropsDefault,
} from "../../../components/form/NewTransactionModal/ModalBase"
import {
  UpdateGoalFormData,
  updateGoalFormSchema,
} from "../../../schemas/UpdateGoalFormSchema"
import { TextFiled } from "../../../components/form/TextField"
import { Input, InputAdornment, InputLabel } from "@mui/material"
import { Calendar } from "lucide-react"
import { StyledInput } from "../NewGoalModal"
import CurrencyInput from "react-currency-input-field"

interface EditGoalProps extends ModalBasePropsDefault {
  goalId: string
}

export function EditGoalModal({ open, handleClose, goalId }: EditGoalProps) {
  const { updateGoal } = useContext(GoalsContext)
  const { control, register, handleSubmit, formState } =
    useForm<UpdateGoalFormData>({
      resolver: zodResolver(updateGoalFormSchema),
    })

  async function handleUpdateGoal(data: UpdateGoalFormData) {
    console.log(data)
    const { Title, Value, TargetedValue, EndTime } = data
    await updateGoal(goalId, {
      Title,
      Value,
      TargetedValue,
      EndTime,
    })
    handleClose()
  }

  return (
    <ModalBase
      submit={handleSubmit(handleUpdateGoal)}
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Editar meta"
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
          {...register("EndTime", {
            valueAsDate: true, // Converte o valor para Date
            setValueAs: (value) => {
              // Transforma para 'YYYY-MM-DD' antes de enviar
              return value
                ? new Date(value).toISOString().split("T")[0]
                : undefined
            },
          })}
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
