import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { loginFormSchema } from '@/validators/auth/LoginFormSchema'
import { Button } from '../../Button'
import { TextField } from '../../TextField'
import { Separator } from '../../Separator'
import { RegisterContainer } from './styles'
import iconGoogle from '@/assets/icon-google.svg'

export function RegisterForm() {
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
    <RegisterContainer>
      <form onSubmit={handleSubmit(handleUserLogin)}>
        <TextField
          id='name'
          label='Nome'
          variant='text'
          error={!!errors.Senha}
          {...register('Email')}
        />
        <TextField
          id='email'
          label='Email'
          variant='email'
          error={!!errors.Senha}
          // helperText={errors.Senha?.message}
          {...register('Email')}
        />
        <TextField
          id='password'
          label='Senha'
          variant='password'
          error={!!errors.Senha}
          // helperText={errors.Senha?.message}
          {...register('Senha')}
        />

        <Button type='submit' disabled={!isValid}>
          Criar conta
        </Button>
      </form>
      <Separator />
      <section>
        <Button iconLeft={<img src={iconGoogle} />} variant='ghost'>
          Cadraste-se com o Google
        </Button>
      </section>
      <span>
        Já tem uma conta?
        <NavLink to={'/login'}>
          <strong> Entrar</strong>
        </NavLink>
      </span>
    </RegisterContainer>
  )
}
