import { z } from 'zod'

export const createAccountFormSchema = z.object({
  title: z
    .string()
    .min(3, 'O nome deve conter no mínimo 03 caracteres.')
    .max(50, 'O nome deve conter no máximo 50 caracteres.'),
  value: z.string().transform((val) => {
    // Remove pontos, troca vírgula por ponto, remove caracteres que não são números, ponto ou hífen
    const numeric = parseFloat(
      val
        .replace(/\./g, '')
        .replace(',', '.')
        .replace(/[^\d.-]/g, '')
    )
    return isNaN(numeric) ? 0 : numeric
  }),
  type: z.enum(
    ['carteira', 'contaBancaria', 'poupanca', 'corretoraDeInvestimentos'],
    {
      errorMap: () => ({ message: 'Selecione um tipo de conta válido.' }),
    }
  ),
  description: z.string().optional(),
})

export type CreateAccountFormData = z.infer<typeof createAccountFormSchema>
