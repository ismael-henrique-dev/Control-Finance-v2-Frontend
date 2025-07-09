import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { PersonStanding } from 'lucide-react'
import { Button } from '../../Button'
import { loginFormSchema } from '../../../../validators/auth/LoginFormSchema'
import { AuthContainer } from './styles'
import { NavLink } from 'react-router-dom'
import { TextField } from '../../TextField'
import iconGoogle from '../../../../assets/icon-google.svg'
import { Separator } from '../../Separator'

export function LoginForm() {
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
    <AuthContainer>
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
        <NavLink to={'/register'}>
          <strong> Cadraste-se</strong>
        </NavLink>
      </span>
    </AuthContainer>
    // <AuthResposiveContainer>
    //   <Sponsor />
    //   <AuthForm
    //     isLogin
    //     routeAuth='/register'
    //     text='Não tem uma conta? '
    //     navLinkText='Cadraste-se'
    //     authType='Entrar'
    //   >
    //     <form onSubmit={handleSubmit(handleUserLogin)}>
    //       <TextFiled variant='standard'>
    //         <InputLabel htmlFor='user-email' error={!!errors.Email}>
    //           Email
    //         </InputLabel>
    //         <Input
    //           type='email'
    //           id='user-email'
    //           error={!!errors.Email}
    //           {...register('Email')}
    //         />
    //         {errors.Email && <p>{errors.Email.message}</p>}{' '}
    //         {/* Mostra o erro */}
    //       </TextFiled>
    //       <TextFiled variant='standard'>
    //         <InputLabel htmlFor='user-password'>Senha</InputLabel>
    //         <Input
    //           id='user-password'
    //           type={showPassword ? 'text' : 'password'}
    //           {...register('Senha')}
    //           endAdornment={
    //             <InputAdornment position='end'>
    //               <IconButton
    //                 aria-label='toggle password visibility'
    //                 onClick={handleClickShowPassword}
    //               >
    //                 {showPassword ? <LockOpen /> : <Lock />}
    //               </IconButton>
    //             </InputAdornment>
    //           }
    //         />
    //         {errors.Senha && <p>{errors.Senha.message}</p>}{' '}
    //         {errors.root && <p>{errors.root.message}</p>}{' '}
    //       </TextFiled>

    //       <Button type='submit' disabled={!isValid}>
    //         {/* {isLoadingDataUser ? 'Entrando...' : 'Entrar'} */}
    //       </Button>
    //     </form>
    //   </AuthForm>
    // </AuthResposiveContainer>
  )
}
