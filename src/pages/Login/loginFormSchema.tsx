import { z } from "zod"

export const loginFormSchema = z.object({
  Email: z.string().email("Email inválido! "),
  Senha: z.string().min(4, "Senha inválida! ")
})
