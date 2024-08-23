import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { Button, Divisory, Form } from "./styles"
import { TextFiled } from "../../TextField"
import { NavLink } from "react-router-dom"
import { Lock, LockOpen, PersonStanding } from "lucide-react"
import iconGoogle from "../../../assets/icon-google.svg"
import { useContext, useState } from "react"
import { UserContext } from "../../../contexts/userContext"
import { useForm } from "react-hook-form"

interface AuthLoginProps {
  isLogin: boolean
  text: string
  authType: string
  navLinkText: string
  routeAuth: "/login" | "/singUp"
  authFunction: () => void
}

export function AuthForm({
  isLogin,
  text,
  authType,
  routeAuth,
  navLinkText,
  authFunction
}: AuthLoginProps) {
  const [showPassword, setShowPassword] = useState(false)

  function handleClickShowPassword() {
    setShowPassword(!showPassword)
  }

  const { userRegister } = useContext(UserContext)

  const { handleSubmit } = useForm()

  return (
    <Form onSubmit={handleSubmit(authFunction)}>
      {!isLogin && (
        <TextFiled variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Nome</InputLabel>
          <Input type="text" error={false} />
        </TextFiled>
      )}
      <TextFiled variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Email</InputLabel>
        <Input type="email" error={false} />
      </TextFiled>
      <TextFiled variant="standard">
        <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
        <Input
          id="standard-adornment-password"
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
      </TextFiled>
      <Button type="submit">{authType}</Button>
      {isLogin && <NavLink to="/">esqueceu a senha?</NavLink>}
      <Divisory>ou</Divisory>
      <section>
        <Button variant="goToWithGoogle">
          <img src={iconGoogle} />
          {authType} com o google
        </Button>
        {isLogin && (
          <Button type="submit" variant="visitMode">
            <PersonStanding />
            Entrar como visitante
          </Button>
        )}
      </section>
      <span>
        {text}
        <NavLink to={routeAuth}>
          {""}
          <strong>{navLinkText}</strong>
        </NavLink>
      </span>
    </Form>
  )
}
