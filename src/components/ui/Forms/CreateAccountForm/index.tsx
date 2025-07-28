import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { Button } from '../../Button'
import { TextField } from '../../TextField'
import { useState } from 'react'
import { toast } from 'sonner'
import { getErrorMessage } from '@/utils/GetErrorMessage'
import { useQueryClient } from '@tanstack/react-query'
import { createAccount } from '@/services/http/account/CreateAccount'
import {
  CreateAccountFormData,
  createAccountFormSchema,
} from '@/validators/account/CreateAccountFormSchema'
import { FormContainer } from './styles'
import { CustomSelect } from '../../Select'
import { accountOptions } from '@/utils/data'

export function CreateAccountForm() {
  const [isLoading, setIsLoading] = useState(false)

  // const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
    mode: 'onChange',
    defaultValues: {
      description: '',
      title: 'Titulo da conta',
      type: 'Carteira',
      initialBalance: 0,
    },
  })

  async function handleCreateAccount(data: CreateAccountFormData) {
    const newAccount = {
      title: data.title,
      description: data.description,
      type: data.type,
      initialBalance: data.initialBalance,
    }

    try {
      setIsLoading(true)
      console.log(data)

      await createAccount(newAccount)

      // queryClient.invalidateQueries({ queryKey: ['pending-goals'] })
      toast.success('Conta criada com êxito.')
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleCreateAccount)}>
      <TextField
        id='title'
        label='Nome da conta'
        variant='text'
        error={!!errors.title}
        helperText={errors.title?.message}
        {...register('title')}
      />
      <TextField
        id='description'
        label='Descrição da conta'
        variant='text'
        error={!!errors.description}
        helperText={errors.description?.message}
        {...register('description')}
      />
      <TextField
        id='initial-balance'
        label='Valor inicial'
        variant='text'
        error={!!errors.initialBalance}
        helperText={errors.initialBalance?.message}
        {...register('initialBalance', { valueAsNumber: true })}
      />
      <Controller
        name='type'
        control={control}
        render={({ field }) => (
          <CustomSelect
            value={field.value}
            onChange={field.onChange}
            options={accountOptions}
          />
        )}
      />
      <Button
        isLoading={isLoading}
        type='submit'
        disabled={!isValid || isLoading}
      >
        Criar conta
      </Button>
    </FormContainer>
  )
}
