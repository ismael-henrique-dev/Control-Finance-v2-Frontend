import { Sponsor } from '../../components/ui/Sponsor'
import { AuthResposiveContainer } from '../../components/auth/ResposiveContainer'
import { LoginForm } from '../../components/ui/Forms/LoginForm'

export function Login() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <LoginForm />
    </AuthResposiveContainer>
  )
}
