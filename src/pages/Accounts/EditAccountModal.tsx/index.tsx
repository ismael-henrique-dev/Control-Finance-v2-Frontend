import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import { useContext, useEffect, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  updateAccountFormSchema,
  UpdateAccountFormSchema,
} from "../../../schemas/UpdateAccountFormSchema"

import {
  ModalBase,
  ModalBasePropsDefault,
} from "../../../components/form/NewTransactionModal/ModalBase"
import { TextFiled } from "../../../components/form/TextField"
import { ValidateSelectArea } from "../../../components/form/TextField/styles"
import { StyledMenuItem } from "../../../components/form/NewTransactionModal/ModalBase/SelectField/styles"
import SelectVariants from "../../../components/form/NewTransactionModal/ModalBase/SelectField"
import { selectAccountTypeData } from "../../../utils/data"
import { AccountsContext } from "../../../contexts"
import { UpdatedData } from "../../../contexts/Accounts/account"

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

  const { register, handleSubmit, reset, control, formState } =
    useForm<UpdateAccountFormSchema>({
      mode: "all",
      resolver: zodResolver(updateAccountFormSchema),
    })

  useEffect(() => {
    if (open && AccountId) {
      const loadAccountData = async () => {
        const accountData = await getAccountById(AccountId)
        if (accountData) {
          setDefaultValues({
            Name: accountData.Name,
            Description: accountData.Description,
            Type: accountData.Type,
          })
          reset({
            Name: accountData.Name,
            Description: accountData.Description,
            Type: accountData.Type,
          })
        }
      }
      loadAccountData()
    }
  }, [open, AccountId, reset, getAccountById])

  async function handleUpdatedAccount(accountData: UpdatedData) {
    await updateAccount(AccountId, accountData)
  }

  if (!defaultValue) {
    return null
  }

  console.log(defaultValue)
  return (
    <ModalBase
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Editar conta"
      submit={handleSubmit(handleUpdatedAccount)}
      type="updatedAccount"
      erros={!formState.isValid}
    >
      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-name">Nome da conta</InputLabel>
        <Input
          type="text"
          id="account-name"
          {...register("Name")}
          error={!!formState.errors.Name}
        />
        {formState.errors.Name && <p>{formState.errors.Name.message}</p>}
      </TextFiled>

      <Controller
        name="Type"
        control={control}
        render={({ field }) => (
          <ValidateSelectArea>
            <SelectVariants
              title="Tipo de conta"
              value={field.value}
              onChange={field.onChange}
              erros={!!formState.errors.Type}
            >
              {selectAccountTypeData.map((item, index) => (
                <StyledMenuItem key={index} value={item.type}>
                  <div>{item.icon}</div>
                  {item.name}
                </StyledMenuItem>
              ))}
            </SelectVariants>
            {formState.errors.Type && <p>{formState.errors.Type.message}</p>}
          </ValidateSelectArea>
        )}
      />

      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-description">Descrição</InputLabel>
        <Input
          type="text"
          id="account-description"
          {...register("Description")}
          error={!!formState.errors.Description}
        />
        {formState.errors.Description && (
          <p>{formState.errors.Description.message}</p>
        )}
      </TextFiled>
    </ModalBase>
  )
}
