import { RegisterForm, Sponsor } from '@/components/ui'
import { RegisterContainer, RegisterContent } from './styles'

export function Register() {
  return (
    <RegisterContainer>
      <RegisterContent>
        <Sponsor />
        <RegisterForm />
      </RegisterContent>
    </RegisterContainer>
  )
}
