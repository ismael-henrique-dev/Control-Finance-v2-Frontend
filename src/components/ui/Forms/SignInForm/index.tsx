import { NavLink } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PersonStanding } from 'lucide-react'
import { SignInWrapperFormContainer } from './styles'
import { Separator } from '../../Separator'
import { Button } from '../../Button'
import { TextField } from '../../TextField'
import { useState } from 'react'
import { SignInFormData, signInFormSchema } from '@/validators/auth/SignIn'
import { singIn } from '@/services/http/auth/SignIn'
import { toast } from 'sonner'
import { getErrorMessage } from '@/utils/GetErrorMessage'
import iconGoogle from '@/assets/icon-google.svg'

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInFormSchema),
    mode: 'onChange',
  })

  async function handleSignIn(data: SignInFormData) {
    const signInData = {
      email: data.email,
      password: data.password,
    }

    try {
      setIsLoading(true)

      const response = await singIn(signInData)

      const token = response.meta.token

      localStorage.setItem('token', token)

      toast.success('Login com êxito.')
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SignInWrapperFormContainer>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <TextField
          id='email'
          label='Email'
          variant='email'
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register('email')}
        />
        <TextField
          id='password'
          label='Senha'
          variant='password'
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register('password')}
        />

        <Button
          isLoading={isLoading}
          type='submit'
          disabled={!isValid || isLoading}
        >
          Entrar
        </Button>
      </form>

      <NavLink to='/'>esqueceu a senha?</NavLink>
      <Separator />
      <section>
        <Button
          iconLeft={<img src={iconGoogle} />}
          variant='ghost'
          disabled={isLoading}
        >
          Entrar com o google
        </Button>

        <Button
          iconLeft={<PersonStanding />}
          type='button'
          variant='secondary'
          disabled={isLoading}
        >
          Entrar como visitante
        </Button>
      </section>
      <span>
        Não tem uma conta?
        <NavLink to={'/signUp'}>
          <strong> Cadraste-se</strong>
        </NavLink>
      </span>
    </SignInWrapperFormContainer>
  )
}
