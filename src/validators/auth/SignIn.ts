import { z } from 'zod'

export const signInFormSchema = z.object({
  email: z.string().email('Digite um email válido.'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
})

export type SignInFormData = z.infer<typeof signInFormSchema>
