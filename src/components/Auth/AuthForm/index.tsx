import { IconButton, Input, InputAdornment, InputLabel } from "@mui/material"
import { AuthContainer, Button, Divisory, Form } from "./styles"
import { TextFiled } from "../../TextField"
import { NavLink } from "react-router-dom"
import { Lock, LockOpen, PersonStanding } from "lucide-react"
import iconGoogle from "../../../assets/icon-google.svg"
import { ReactNode, useContext, useState } from "react"
import { UserContext } from "../../../contexts/userContext"
import { useForm } from "react-hook-form"

interface AuthLoginProps {
  children?: ReactNode
  isLogin: boolean
  text: string
  authType: string
  navLinkText: string
  routeAuth: "/login" | "/singUp"
}

export function AuthForm({
  isLogin,
  text,
  authType,
  routeAuth,
  navLinkText,
  children,
}: AuthLoginProps) {

  return (
    <AuthContainer>
      {children}

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
    </AuthContainer>
  )
}
