import { useContext, useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  updateAccountFormSchema,
  UpdateAccountFormSchema,
} from '../../../../validators/account/UpdateAccountFormSchema'

import { ValidateSelectArea } from '../../TextField/styles'
import { selectAccountTypeData } from '../../../../utils/data'
import { AccountsContext } from '../../../../contexts'
import { UpdatedData } from '../../../../contexts/Accounts/account'
import { ModalBase, ModalBasePropsDefault } from '../ModalBase'
import SelectVariants from '../ModalBase/SelectField'
import { StyledMenuItem } from '../ModalBase/SelectField/styles'
import { TextField } from '../../TextField' // ← novo TextField

interface EditModalProps extends ModalBasePropsDefault {
  AccountId: string
}

export function EditAccountModal({
  open,
  handleClose,
  AccountId,
}: EditModalProps) {
  const { updateAccount, getAccountById } = useContext(AccountsContext)
  const [defaultValue, setDefaultValues] =
    useState<UpdateAccountFormSchema | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm<UpdateAccountFormSchema>({
    mode: 'all',
    resolver: zodResolver(updateAccountFormSchema),
  })

  useEffect(() => {
    if (open && AccountId) {
      const loadAccountData = async () => {
        const accountData = await getAccountById(AccountId)
        if (accountData) {
          const values = {
            Name: accountData.Name,
            Description: accountData.Description,
            Type: accountData.Type,
          }
          setDefaultValues(values)
          reset(values)
        }
      }
      loadAccountData()
    }
  }, [open, AccountId, reset, getAccountById])

  async function handleUpdatedAccount(accountData: UpdatedData) {
    await updateAccount(AccountId, accountData)
  }

  if (!defaultValue) return null

  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle='Editar conta'
      submit={handleSubmit(handleUpdatedAccount)}
      type='updatedAccount'
      erros={!isValid}
    >
      <TextField
        id='account-name'
        label='Nome da conta'
        variant='text'
        {...register('Name')}
        error={!!errors.Name}
        helperText={errors.Name?.message}
      />

      <Controller
        name='Type'
        control={control}
        render={({ field }) => (
          <ValidateSelectArea>
            <SelectVariants
              title='Tipo de conta'
              value={field.value}
              onChange={field.onChange}
              erros={!!errors.Type}
            >
              {selectAccountTypeData.map((item, index) => (
                <StyledMenuItem key={index} value={item.type}>
                  <div>{item.icon}</div>
                  {item.name}
                </StyledMenuItem>
              ))}
            </SelectVariants>
            {errors.Type && <p>{errors.Type.message}</p>}
          </ValidateSelectArea>
        )}
      />

      <TextField
        id='account-description'
        label='Descrição'
        variant='text'
        {...register('Description')}
        error={!!errors.Description}
        helperText={errors.Description?.message}
      />
    </ModalBase>
  )
}
