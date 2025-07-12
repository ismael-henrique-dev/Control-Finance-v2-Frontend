import { LoginForm, Sponsor } from '@/components/ui'
import { LoginContainer, LoginContent } from './styles'

export function Login() {
  return (
    <LoginContainer>
      <LoginContent>
        <Sponsor />
        <LoginForm />
      </LoginContent>
    </LoginContainer>
  )
}
