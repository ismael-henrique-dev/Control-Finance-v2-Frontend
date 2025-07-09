import { useContext } from 'react'
import { GoalsContext } from '../../../../contexts/Goals/goalsContext'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  UpdateGoalFormData,
  updateGoalFormSchema,
} from '../../../../validators/goal/UpdateGoalFormSchema'
import { TextField } from '../../TextField' // ← novo componente
import CurrencyInput from 'react-currency-input-field'
import { ModalBase, ModalBasePropsDefault } from '../NewTransactionModal/ModalBase'
import { InputAdornment } from '@mui/material'
import { Calendar } from 'lucide-react'

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
    const { Title, Value, TargetedValue, EndTime } = data
    await updateGoal(goalId, { Title, Value, TargetedValue, EndTime })
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
              id="goal-current-value"
              intlConfig={{ locale: 'pt-BR', currency: 'BRL' }}
              decimalSeparator=","
              groupSeparator="."
              value={field.value}
              onValueChange={(value) => {
                const numericValue = value
                  ? parseFloat(value.replace(/[^\d.-]/g, ''))
                  : 0
                field.onChange(numericValue)
              }}
            />
          )}
        />
      }
    >
      <TextField
        label="Nome da meta"
        id="goal-title"
        {...register('Title')}
        error={!!formState.errors.Title}
        helperText={formState.errors.Title?.message}
      />

      <TextField
        label="Valor final"
        type="number"
        id="goal-target"
        {...register('TargetedValue', { valueAsNumber: true })}
        error={!!formState.errors.TargetedValue}
        helperText={formState.errors.TargetedValue?.message}
      />

      <TextField
        label="Data final"
        type="date"
        id="goal-end-date"
        {...register('EndTime', {
          valueAsDate: true,
          setValueAs: (value) =>
            value ? new Date(value).toISOString().split('T')[0] : undefined,
        })}
        error={!!formState.errors.EndTime}
        helperText={formState.errors.EndTime?.message}
     
      />
    </ModalBase>
  )
}
