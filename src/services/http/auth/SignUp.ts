import { api } from '@/services/api'
import { getAxiosStatusCode } from '@/utils/GetAxiosSatatusCode'
import { type NewUser } from '@/validators/auth/SignUp'

type SignUpResponse = {
  status: number
  meta: {
    name: string
    email: string
  }
  body: {
    email: string
    password: string
    username: string
    profileUrl: string
  }
  date: string
} 

export async function singUp(user: NewUser): Promise<SignUpResponse> {
  try {
    const response = await api.post<SignUpResponse>('user', user)

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
