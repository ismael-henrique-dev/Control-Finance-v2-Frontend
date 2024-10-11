export interface NewAccountProps {
  Name: string
  Value: number
  Type: string
  Description: string
}

export interface AccountsContextType {
  isLoading: boolean
  statics: Statics | null
  accountsList: Account[]
  createAccount: (data: NewAccountProps) => Promise<void>
  deleteAccount: (id: string) => Promise<void>
  updateAccount: (accountId: string, updatedData: UpdatedData) => Promise<void>
  getAccountById: (accountId: string) => Promise<UpdateAccountFormSchema>
  resetAccounts: () => void
  fetchAccounts: () => Promise<void>
}

export interface Statics {
  sum: number
  totalWithdraw: number
  totalDeposit: number
}

export interface Account {
  sum: number
  WithdrawValue: number
  DepositValue: number
  accountTitle: string
  AcId: string
  Type: string
}

export interface UpdatedData {
  Name: string
  Description: string
  Type: string
}
