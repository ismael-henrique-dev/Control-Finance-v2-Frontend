import { Sponsor } from "../../components/Auth/Sponsor"
import { AuthForm } from "../../components/Auth/AuthForm"
import { AuthResposiveContainer } from "../../components/Auth/ResposiveContainer"
import { TextFiled } from "../../components/form/TextField"
import InputLabel from "@mui/material/InputLabel"
import Input from "@mui/material/Input"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import { useContext, useState } from "react"
import { LockOpen, Lock } from "lucide-react"
import { Button } from "../../components/Auth/AuthForm/styles"
import { useForm } from "react-hook-form"
import { UserContext } from "../../contexts/userContext"
import { zodResolver } from "@hookform/resolvers/zod"
import { registerUserFormSchema } from "./registerFormSchema"

interface UserRegisterFormData {
  Email: string
  Senha: string
  UsernName: string
}

export function SingUp() {
  const [showPassword, setShowPassword] = useState(false)

  const { userRegister } = useContext(UserContext)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserRegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onChange",
  })

  async function handleUserRegister(data: UserRegisterFormData) {
    const { Email, Senha, UsernName } = data

    console.log(data)

    await userRegister({
      Email,
      Senha,
      UsernName,
    })
  }

  return (
    <AuthResposiveContainer>
      <Sponsor />
      <AuthForm
        isLogin={false}
        text="já tem uma conta? "
        authType="Cadraste-se"
        routeAuth="/login"
        navLinkText="Entrar"
      >
        <form onSubmit={handleSubmit(handleUserRegister)}>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-name" error={!!errors.UsernName}>
              Nome
            </InputLabel>
            <Input
              type="text"
              id="user-name"
              error={!!errors.UsernName}
              {...register("UsernName")}
            />
            {errors.UsernName && <p>{errors.UsernName.message}</p>}
          </TextFiled>
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
            {errors.Email && <p>{errors.Email.message}</p>}
          </TextFiled>
          <TextFiled variant="standard">
            <InputLabel htmlFor="user-password" error={!!errors.Senha}>
              Senha
            </InputLabel>
            <Input
              id="user-password"
              {...register("Senha")}
              error={!!errors.Senha}
              type={showPassword ? "text" : "password"}
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
            {errors.Senha && <p>{errors.Senha.message}</p>}
          </TextFiled>
          <Button type="submit" disabled={!isValid}>
            Cadrastar
          </Button>
        </form>
      </AuthForm>
    </AuthResposiveContainer>
  )
}
