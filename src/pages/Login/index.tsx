import { Sponsor } from "../../components/auth/Sponsor"
import { AuthResposiveContainer } from "../../components/auth/ResposiveContainer"
import { AuthForm } from "../../components/auth/AuthForm"
import { TextFiled } from "../../components/form/TextField"
import { Button } from "../../components/auth/AuthForm/styles"
import { LockOpen, Lock } from "lucide-react"
import { useContext, useState } from "react"
import { UserContext } from "../../contexts/User/userContext"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginFormSchema } from "./loginFormSchema"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"

interface UserLoginFormData {
  Email: string
  Senha: string
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  const { userLogin, isLoadingDataUser } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    setError, 
    formState: { errors, isValid },
  } = useForm<UserLoginFormData>({
    resolver: zodResolver(loginFormSchema),
    mode: "onChange",
  })

  async function handleUserLogin(data: UserLoginFormData) {
    const { Email, Senha } = data
    console.log(data)

    try {
      const responseError = await userLogin({ Email, Senha })
      if (responseError) {
        setError("root", {
          type: "manual",
          message: "Email ou senha incorretos.",
        })
      }
    } catch (error) {
      console.log("Erro ao fazer login.", error)
    }
  }

  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin
        routeAuth="/singUp"
        text="Não tem uma conta? "
        navLinkText="Cadraste-se"
        authType="Entrar"
      >
        <form onSubmit={handleSubmit(handleUserLogin)}>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-email" error={!!errors.Email}>
              Email
            </InputLabel>
            <Input
              type="email"
              id="user-email"
              error={!!errors.Email}
              {...register("Email")}
            />
            {errors.Email && <p>{errors.Email.message}</p>}{" "}
          
          </TextFiled>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-password">Senha</InputLabel>
            <Input
              id="user-password"
              type={showPassword ? "text" : "password"}
              {...register("Senha")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {showPassword ? <LockOpen /> : <Lock />}
                  </IconButton>
                </InputAdornment>
              }
            />
            {errors.Senha && <p>{errors.Senha.message}</p>}{" "}
             {errors.root && <p>{errors.root.message}</p>}{" "}
          </TextFiled>
         
          <Button type="submit" disabled={!isValid}>
            {isLoadingDataUser ? "Entrando..." : "Entrar"}
          </Button>
        </form>
      </AuthForm>
    </AuthResposiveContainer>
  )
}
