import { token } from '@/constants'
import { api } from '@/services/api'
import { getAxiosStatusCode } from '@/utils/GetAxiosSatatusCode'
import { CreateAccountFormData } from '@/validators/account/CreateAccountFormSchema'

type NewAccount = CreateAccountFormData

type CreateAccountResponse = {
  status: number
  meta: {
    title: string
    description: string
  }
  body: NewAccount
  date: string
}

export async function editAccount(
  updatedAccount: NewAccount
): Promise<CreateAccountResponse> {
  try {
    const response = await api.put<CreateAccountResponse>(
      'account',
      updatedAccount,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

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
