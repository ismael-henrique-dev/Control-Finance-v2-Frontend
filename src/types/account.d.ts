type AccountType = 'bank'

type Account = {
  id: string
  name: string
  value: number
  type: AccountType
  createdAt: Date
  userId: string
  description?: string
}
