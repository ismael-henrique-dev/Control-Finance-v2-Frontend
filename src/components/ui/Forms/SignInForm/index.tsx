import { NavLink } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PersonStanding } from 'lucide-react'
import { loginFormSchema } from '@/validators/auth/LoginFormSchema'
import { SignInWrapperFormContainer } from './styles'
import { Separator } from '../../Separator'
import { Button } from '../../Button'
import { TextField } from '../../TextField'
import iconGoogle from '@/assets/icon-google.svg'

export function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange',
  })

  async function handleUserLogin() {
    try {
    } catch (error) {
      console.log('Erro ao fazer login.', error)
    }
  }

  return (
    <SignInWrapperFormContainer>
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <TextField
          id='email'
          label='Email'
          variant='email'
          error={!!errors.Senha}
          // helperText={errors.Senha?.message}
          {...register('Email')}
        />
        <TextField
          id='Senha'
          label='Senha'
          variant='password'
          error={!!errors.Senha}
          // helperText={errors.Senha?.message}
          {...register('Senha')}
        />

        <Button type='submit' disabled={!isValid}>
          Entrar
        </Button>
      </form>

      <NavLink to='/'>esqueceu a senha?</NavLink>
      <Separator />
      <section>
        <Button iconLeft={<img src={iconGoogle} />} variant='ghost'>
          Entrar com o google
        </Button>

        <Button iconLeft={<PersonStanding />} type='button' variant='secondary'>
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
