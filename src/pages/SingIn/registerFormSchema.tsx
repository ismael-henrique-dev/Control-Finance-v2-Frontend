import { z } from "zod"

export const registerUserFormSchema = z.object({
  Email: z.string().email("Email inválido!"),
  Senha: z.string().min(4, "A senha deve ter no mínimo 4 caracteres."),
  UsernName: z.string().min(3, "O nome deve ter no mínimo 3 caracteres."),
})