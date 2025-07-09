import { Sponsor } from '../../components/ui/Sponsor'
import { AuthResposiveContainer } from '../../components/auth/ResposiveContainer'
import { RegisterForm } from '../../components/ui/Forms/RegisterForm'

export function Register() {
  return (
    <AuthResposiveContainer>
      <Sponsor />
      <RegisterForm />
    </AuthResposiveContainer>
  )
}
