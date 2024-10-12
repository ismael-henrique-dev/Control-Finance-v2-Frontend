import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@mui/material/Input"
import InputLabel from "@mui/material/InputLabel"
import { useContext, useEffect, useState } from "react"
import CurrencyInput from "react-currency-input-field"
import { Controller, useForm } from "react-hook-form"
import {
  editTransactionFormSchema,
  EditTransactionFormSchema,
} from "../../../schemas/transactions/EditTransactionFormSchema"
import { TransactionsContext } from "../../../contexts"
import { selectCategoryData } from "../../../utils/data"
import {
  ModalBase,
  ModalBasePropsDefault,
} from "../../../components/form/NewTransactionModal/ModalBase"
import SelectVariants from "../../../components/form/NewTransactionModal/ModalBase/SelectField"
import { StyledMenuItem } from "../../FinancialIncome/Select/styles"
import { TextFiled } from "../../../components/form/TextField"

interface CategoriesType {
  name: string
  type: string
}

interface EditTransactionModalProps extends ModalBasePropsDefault {
  transactionId: string
}

export function EditTransactionModal({
  open,
  handleClose,
  transactionId,
}: EditTransactionModalProps) {
  const [categories, setCategories] = useState<CategoriesType[]>([])
  const { updateTransaction } = useContext(TransactionsContext)

  const { control, register, handleSubmit, watch, formState } =
    useForm<EditTransactionFormSchema>({
      resolver: zodResolver(editTransactionFormSchema),
      defaultValues: {
        Type: "DEP",
        Categories: "",
      },
    })

  const selectedType = watch("Type")

  useEffect(() => {
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

  async function handleUpdateTransaction(data: EditTransactionFormSchema) {
    const { Title, Value, Type, Categories } = data
    await updateTransaction(transactionId, { Title, Value, Type, Categories })
  }

  return (
    <ModalBase
      type="createAccount"
      open={open}
      handleClose={handleClose}
      submitButtonTitle="Adicionar nova transação"
      submit={handleSubmit(handleUpdateTransaction)}
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
    </ModalBase>
  )
}
