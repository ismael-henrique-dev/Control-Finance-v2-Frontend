import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    email: z.string().email('Digite um email válido.'),
    password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres.'),
    confirmPassword: z
      .string()
      .min(6, 'A confirmação de senha deve ter no mínimo 6 caracteres.'),
    userName: z
      .string() 
      .min(3, 'O nome de usuário deve ter no mínimo 3 caracteres.'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'As senhas precisam coincidir.',
    path: ['confirmPassword'],
  })

export type SignUpFormData = z.infer<typeof signUpFormSchema>
export type NewUser = Omit<SignUpFormData, 'confirmPassword'>