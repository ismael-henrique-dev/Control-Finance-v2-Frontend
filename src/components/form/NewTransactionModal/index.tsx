import { useContext, useEffect, useState } from "react"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"

import { zodResolver } from "@hookform/resolvers/zod"
import { ModalBase, ModalBasePropsDefault } from "./ModalBase"
import { TextFiled } from "../TextField"
import { TransactionsContext } from "../../../contexts/Transactions/transactionsContext"
import {
  createTransactionFormSchema,
  CreateTransactionFormSchema,
} from "../../../schemas/transactions/CreateTransactionFormSchema"
import { Controller, useForm } from "react-hook-form"
import { AccountsContext } from "../../../contexts/Accounts/accountsContext"
import SelectVariants from "./ModalBase/SelectField"
import { selectCategoryData } from "../../../utils/data"
import CurrencyInput from "react-currency-input-field"
import { StyledMenuItem } from "./ModalBase/SelectField/styles"

interface NewTransactionModalProps extends ModalBasePropsDefault {
  accountId?: string
  accountTitle?: string
}

interface CategoriesType {
  name: string
  type: string
}

export function NewTransactionModal({
  open,
  handleClose,
  accountId,
  accountTitle,
}: NewTransactionModalProps) {
  const [categories, setCategories] = useState<CategoriesType[]>([])
  const { createTransaction } = useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)
  const [acTitle, setAcTitle] = useState(accountTitle || "")

  const { control, register, handleSubmit, watch, reset, formState } =
    useForm<CreateTransactionFormSchema>({
      resolver: zodResolver(createTransactionFormSchema),
      defaultValues: {
        Type: "DEP",
        Categories: "",
        accountId: accountId || "",
      },
    })

  const selectedType = watch("Type")

  useEffect(() => {
    const selectedCategoryData = selectCategoryData.find(
      (item) => item.Type.typeValue === selectedType
    )

    if (selectedCategoryData) {
      setCategories(
        selectedCategoryData.categories.map((category) => ({
          name: category.name,
          type: category.type,
        }))
      )
    }
  }, [selectedType])

  useEffect(() => {
    if (accountId && accountTitle) {
      setAcTitle(accountTitle)
    }
  }, [accountId, accountTitle])

  async function handleCreateTransaction(data: CreateTransactionFormSchema) {
    const { Title, Value, Type, Categories, accountId } = data
    console.log(data)

    reset()
    await createTransaction(
      { Title, Value, Type, accountId, Categories },
      acTitle
    )
    handleClose()
  }

  return (
    <ModalBase
      type="createAccount"
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
      submit={handleSubmit(handleCreateTransaction)}
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
      <TextFiled variant="standard" formControlWidth="90%">
        <InputLabel htmlFor="transaction-name">Nome da transação</InputLabel>
        <Input
          type="text"
          id="transaction-name"
          {...register("Title")}
          error={false}
        />
      </TextFiled>

      <Controller
        name="Type"
        control={control}
        render={({ field }) => (
          <SelectVariants
            title="Tipo de transação"
            erros={!!formState.errors.Type}
            onChange={(value) => {
              field.onChange(value)
            }}
            value={field.value}
          >
            {selectCategoryData.map((item, index) => (
              <StyledMenuItem key={index} value={item.Type.typeValue}>
                {item.Type.typeName}
              </StyledMenuItem>
            ))}
          </SelectVariants>
        )}
      />

      <Controller
        name="Categories"
        control={control}
        render={({ field }) => (
          <SelectVariants
            title="Categoria"
            value={field.value}
            onChange={field.onChange}
            erros={!!formState.errors.Categories}
          >
            {categories.map((category, index) => (
              <StyledMenuItem key={index} value={category.type}>
                {category.name}
              </StyledMenuItem>
            ))}
          </SelectVariants>
        )}
      />

      <Controller
        name="accountId"
        control={control}
        render={({ field }) => (
          <SelectVariants
            title="Conta"
            erros={!!formState.errors.accountId}
            onChange={field.onChange}
            value={field.value}
          >
            {accountId ? (
              <StyledMenuItem value={accountId}>{acTitle}</StyledMenuItem>
            ) : (
              accountsList.map((item) => (
                <StyledMenuItem
                  key={item.AcId}
                  value={item.AcId}
                  onClick={() => setAcTitle(item.accountTitle)}
                >
                  {item.accountTitle}
                </StyledMenuItem>
              ))
            )}
          </SelectVariants>
        )}
      />
    </ModalBase>
  )
}
