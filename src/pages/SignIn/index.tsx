import { SignInForm, Sponsor } from '@/components/ui'
import { SignInContainer, SignInContent } from './styles'

export function SignIn() {
  return (
    <SignInContainer>
      <SignInContent>
        <Sponsor />
        <SignInForm />
      </SignInContent>
    </SignInContainer>
  )
}
