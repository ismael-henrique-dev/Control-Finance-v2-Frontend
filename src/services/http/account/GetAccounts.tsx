import { token } from '@/constants'
import { api } from '@/services/api'
import { getAxiosStatusCode } from '@/utils/GetAxiosSatatusCode'

type GetAccountsResponse = {
  status: number
  params: Params
  data: Data
  meta: Meta
  date: string
  links: Links
}

export async function getAccounts(): Promise<GetAccountsResponse> {
  try {
    const response = await api.get<GetAccountsResponse>('/account', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page: 1
      }
    })

    return response.data
  } catch (error) {
    const statusCode = getAxiosStatusCode(error)

    switch (statusCode) {
      case 404:
        throw new Error('Este e-mail ou nome de usuário já está em uso.')
      case 500:
        throw new Error('Erro interno no servidor.')
      default:
        throw new Error('Erro desconhecido.')
    }
  }
}

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

type Transaction = {
  id: string
  title: string
  value: number
  type: 'income' | 'outcome'
  createdAt: string
  accountId: string
  categoryId: string
}

type DataSummary = {
  value: number
  income: number
  outcome: number
}

type TransactionsSummary = {
  size: number
  income: number
  outcome: number
  list: Transaction[]
}

type Data = {
  filteredAccounts: Account[]
  totalAccounts: Account[]
  data: DataSummary
  transactions: TransactionsSummary
}

type Links = {
  first: string
  last: string
  next: string
  prev: string
}

type Meta = {
  maxPage: number
  page: number
  pageSize: number
  totalCount: number
  links: Links
}

type Params = {
  query: string
  type: string
  minValue: string
  maxValue: string
  page: string
  pageSize: string
}

type ApiResponse = {
  status: number
  params: Params
  data: Data
  meta: Meta
  date: string
  links: Links
}
