import { SignUpForm, Sponsor } from '@/components/ui'
import { SignUpContainer, SignUpRegisterContent } from './styles'

export function SingUp() {
  return (
    <SignUpContainer>
      <SignUpRegisterContent>
        <Sponsor />
        <SignUpForm />
      </SignUpRegisterContent>
    </SignUpContainer>
  )
}
