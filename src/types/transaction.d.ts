export type Transaction = {
  id: string
  title: string
  value: number
  type: 'income' | 'outcome'
  createdAt: Date
  accontId: string
  categories: string[]
}
