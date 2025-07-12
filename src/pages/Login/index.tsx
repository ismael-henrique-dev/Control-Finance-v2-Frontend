import { AuthResposiveContainer } from '../../components/auth/ResposiveContainer'
import { LoginForm, Sponsor } from '@/components/ui'

export function Login() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <LoginForm />
    </AuthResposiveContainer>
  )
}
