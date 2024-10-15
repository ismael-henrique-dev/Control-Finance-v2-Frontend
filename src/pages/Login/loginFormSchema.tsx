import { z } from "zod"

export const loginFormSchema = z.object({
  Email: z.string().email("Email inválido! "),
  Senha: z.string().min(1, "A senha não pode estar vazia."),
})
