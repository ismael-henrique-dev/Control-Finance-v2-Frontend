import { RegisterForm, Sponsor } from '@/components/ui'
import { AuthResposiveContainer } from '../../components/auth/ResposiveContainer'

export function Register() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <RegisterForm />
    </AuthResposiveContainer>
  )
}
