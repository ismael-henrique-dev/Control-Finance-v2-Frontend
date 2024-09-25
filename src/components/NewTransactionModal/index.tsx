import { ModalBase, ModalBasePropsDefault } from "../ModalBase"
import { TextFiled } from "../TextField"
import SelectVariants from "../ModalBase/SelectField"
import { useContext, useEffect, useState } from "react"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import { Controller, useForm } from "react-hook-form"
import { TransactionsContext } from "../../contexts/transactionsContext"
import { AccountsContext } from "../../contexts/accountsContext"
import CurrencyInput from "react-currency-input-field"
import { StyledMenuItem } from "../ModalBase/SelectField/styles"
import { selectCategoryData } from "./dataCategories"
import {
  createTransactionFormSchema,
  CreateTransactionFormSchema,
} from "./transactionFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

// const StyledInput = styled(Input)`
//   input[type="date"] {
//     &::-webkit-calendar-picker-indicator {
//       opacity: 0;
//       display: none;
//     }
//     &::-webkit-inner-spin-button,
//     &::-webkit-clear-button {
//       display: none;
//     }
//     &::-moz-clear {
//       display: none;
//     }
//   }
// `

interface NewTransactionModal {
  open: boolean
  handleClose: () => void
}

interface CategoriesType {
  name: string
  type: string
}

export function NewTransactionModal({
  open,
  handleClose,
}: ModalBasePropsDefault) {
  const [categories, setCategories] = useState<CategoriesType[]>([])
  const { createTransaction } = useContext(TransactionsContext)
  const { accountsList } = useContext(AccountsContext)

  const { control, register, handleSubmit, watch, formState } =
    useForm<CreateTransactionFormSchema>({
      resolver: zodResolver(createTransactionFormSchema),
      defaultValues: {
        Type: "DEP",
        Categories: "",
        accountId: "",
      },
    })

  const selectedType = watch("Type")

  useEffect(() => {
    // console.log(`Tipo de transação selecionado: ${selectedType}`)

    const selectedCategoryData = selectCategoryData.find(
      (item) => item.Type.typeValue === selectedType
    )

    if (selectedCategoryData) {
      setCategories(
        selectedCategoryData.categories.map((el) => ({
          name: el.name,
          type: el.type,
        }))
      )
    }
  }, [selectedType])

  async function handleCreateTransaction(data: CreateTransactionFormSchema) {
    const { Title, Value, Type, Categories, accountId } = data
    console.log(data)
    await createTransaction({ Title, Value, Type, accountId, Categories })
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
            {accountsList.map((item, index) => (
              <StyledMenuItem key={index} value={item.AcId}>
                {item.accountTitle}
              </StyledMenuItem>
            ))}
          </SelectVariants>
        )}
      />
    </ModalBase>
  )
}
