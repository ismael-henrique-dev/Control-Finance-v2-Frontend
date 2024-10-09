import { useContext } from "react"
import { GoalsContext } from "../../../contexts/goalsContext"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import {
  CreateNewDepositOfGoalFormData,
  createNewDepositOfGoalFormSchema,
} from "../../../schemas/CreateNewDepositOfGoalFormSchema"
import CurrencyInput from "react-currency-input-field"

interface NewDepositOfGoalProps extends ModalBasePropsDefault {
  goalId: string
}

export function NewDepositOfGoalModal({
  open,
  handleClose,
  goalId,
}: NewDepositOfGoalProps) {
  const { NewDepositOfGoal } = useContext(GoalsContext)
  const { control, handleSubmit, formState } =
    useForm<CreateNewDepositOfGoalFormData>({
      resolver: zodResolver(createNewDepositOfGoalFormSchema),
    })

  async function handleNewDepositOfGoal(data: CreateNewDepositOfGoalFormData) {
    console.log(data)
    const { DepositValue } = data
    await NewDepositOfGoal(goalId, DepositValue)
    handleClose()
  }

  return (
    <ModalBase
      type="createAccount"
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Novo depósito"
      erros={!formState.isValid}
      submit={handleSubmit(handleNewDepositOfGoal)}
      inputValue={
        <Controller
          name="DepositValue"
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
    ></ModalBase>
  )
}
