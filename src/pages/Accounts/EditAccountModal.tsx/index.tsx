import InputLabel from "@mui/material/InputLabel"
import { ModalBase, ModalBasePropsDefault } from "../../../components/ModalBase"
import { TextFiled } from "../../../components/TextField"
import Input from "@mui/material/Input"
import { useForm, Controller } from "react-hook-form"
import { useContext, useEffect, useState, useRef } from "react"
import SelectVariants from "../../../components/ModalBase/SelectField"
import { AccountsContext, UpdatedData } from "../../../contexts/accountsContext"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { ValidateSelectArea } from "../../../components/TextField/styles"
import { selectAccountTypeData } from "../NewAccountModal"

interface EditModalProps extends ModalBasePropsDefault {
  AccountId: string
}

const updatedAccountFormSchema = z.object({
  Name: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  Description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
  Type: z.enum(
    ["Carteira", "ContaBancaria", "Poupanca", "CorretoraDeInvestimentos"],
    {
      errorMap: () => ({ message: "Selecione um tipo de conta válido." }),
    }
  ),
})

export type UpdatedAccountFormSchema = z.infer<typeof updatedAccountFormSchema>

export function EditAccountModal({
  open,
  handleClose,
  AccountId,
}: EditModalProps) {
  const { updateAccount, getAccountById } = useContext(AccountsContext)
  const [, setDefaultValues] =
    useState<UpdatedAccountFormSchema | null>(null)

  const nameInputRef = useRef<HTMLInputElement | null>(null)
  const descriptionInputRef = useRef<HTMLInputElement | null>(null)

  const { register, handleSubmit, reset, control, formState } =
    useForm<UpdatedAccountFormSchema>({
      mode: "onChange",
      resolver: zodResolver(updatedAccountFormSchema),
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

    if (open && nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }, [open, AccountId, reset, getAccountById])

  async function handleUpdatedAccount(accountData: UpdatedData) {
    await updateAccount(AccountId, accountData)
  }

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
          inputRef={nameInputRef}
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
              data={selectAccountTypeData}
              value={field.value}
              onChange={field.onChange}
              erros={!!formState.errors.Type}
            />
            {formState.errors.Type && <p>{formState.errors.Type.message}</p>}
          </ValidateSelectArea>
        )}
      />

      <TextFiled formControlWidth="90%" variant="standard">
        <InputLabel htmlFor="account-description">Descrição</InputLabel>
        <Input
          type="text"
          id="account-description"
          inputRef={descriptionInputRef}
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
