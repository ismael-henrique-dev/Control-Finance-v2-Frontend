type Resume = {
  income: number
  outcome: number
  per_income: number
  per_outcome: number
  transactions: number
}

type Account = {
  id: string
  title: string
  type: string
  description: string
  userId: string
  value: number
  resume: Resume
}
