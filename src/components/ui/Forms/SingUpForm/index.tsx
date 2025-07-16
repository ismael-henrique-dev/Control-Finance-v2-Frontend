import { zodResolver } from '@hookform/resolvers/zod'
import { NavLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button } from '../../Button'
import { TextField } from '../../TextField'
import { Separator } from '../../Separator'
import { SignUpFormWrapperContainer } from './styles'
import { SignUpFormData, signUpFormSchema } from '@/validators/auth/SignUp'
import { useState } from 'react'
import { singUp } from '@/services/http/auth/SignUp'
import { toast } from 'sonner'
import { getErrorMessage } from '@/utils/GetErrorMessage'
import iconGoogle from '@/assets/icon-google.svg'

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      userName: '',
      confirmPassword: '',
    },
  })

  async function handleSignUp(data: SignUpFormData) {
    const user = {
      userName: data.userName,
      email: data.email,
      password: data.password,
    }

    try {
      setIsLoading(true)

      await singUp(user)

      toast.success('Conta criada êxito.')
    } catch (error) {
      const errorMessage = getErrorMessage(error)

      toast.error(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <SignUpFormWrapperContainer>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <TextField
          id='userName'
          label='Nome'
          variant='text'
          error={!!errors.userName}
          helperText={errors.userName?.message}
          {...register('userName')}
        />
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
        <TextField
          id='confirm-password'
          label='Confirmar senha'
          variant='password'
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />

        <Button
          isLoading={isLoading}
          type='submit'
          disabled={!isValid || isLoading}
        >
          Criar conta
        </Button>
      </form>
      <Separator />
      <section>
        <Button
          iconLeft={<img src={iconGoogle} />}
          variant='ghost'
          disabled={isLoading}
        >
          Cadraste-se com o Google
        </Button>
      </section>
      <span>
        Já tem uma conta?
        <NavLink to={'/login'}>
          <strong> Entrar</strong>
        </NavLink>
      </span>
    </SignUpFormWrapperContainer>
  )
}
