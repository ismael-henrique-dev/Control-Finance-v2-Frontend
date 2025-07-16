import { api } from '@/services/api'
import { getAxiosStatusCode } from '@/utils/GetAxiosSatatusCode'

type SignInResponse = {
  status: number
  meta: {
    token: string
  }
  body: {
    email: string
  }
  date: string
}

type SignInData = {
  email: string
  password: string
}

export async function singIn(signInData: SignInData): Promise<SignInResponse> {
  try {
    const response = await api.patch<SignInResponse>('auth', signInData)

    return response.data
  } catch (error) {
    const statusCode = getAxiosStatusCode(error)

    switch (statusCode) {
      case 400:
        throw new Error('Validation error.')
      case 404:
        throw new Error('Este e-mail ou nome de usuário já está em uso.')
      case 500:
        throw new Error('Erro interno no servidor.')
      default:
        throw new Error('Erro desconhecido.')
    }
  }
}
