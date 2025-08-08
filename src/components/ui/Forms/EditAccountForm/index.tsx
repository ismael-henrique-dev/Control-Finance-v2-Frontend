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

import { CustomSelect } from '../../Select'
import { accountOptions } from '@/utils/data'
import { FormContainer } from './styles'

export function EditAccountForm() {
  const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountFormSchema),
    mode: 'onSubmit',
    defaultValues: {
      description: '',
      title: '',
      type: 'carteira',
      value: 0, // valor inicial como string formatada
    },
  })

  function formatCurrency(value: string) {
    const cleaned = value.replace(/\D/g, '')
    const numeric = Number(cleaned) / 100

    return numeric.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    })
  }

  async function handleUpdateAccount(data: CreateAccountFormData) {
    const newAccount = {
      title: data.title,
      description: data.description,
      type: data.type,
      value: data.value,
    }

    try {
      setIsLoading(true)
      console.log(data)
      console.log(newAccount)

      await createAccount(newAccount)

      queryClient.invalidateQueries({ queryKey: ['accounts'] })
      toast.success('Conta atualizada com êxito.')
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <FormContainer onSubmit={handleSubmit(handleUpdateAccount)}>
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
      <Controller
        name='value'
        control={control}
        // defaultValue='R$ 0,00'
        render={({ field }) => (
          <TextField
            id='initial-balance'
            label='Valor inicial'
            variant='text'
            error={!!errors.value}
            helperText={errors.value?.message}
            {...field}
            onChange={(e) => {
              const formatted = formatCurrency(e.target.value)
              field.onChange(formatted) // atualiza o react-hook-form
            }}
          />
        )}
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
      <Button type='submit' isLoading={isLoading} disabled={isLoading}>
        Criar conta
      </Button>
    </FormContainer>
  )
}
