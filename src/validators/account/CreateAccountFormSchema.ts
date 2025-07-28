import { z } from "zod"

export const createAccountFormSchema = z.object({
  title: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  value: z.number().min(0),
  type: z.enum(
    ["carteira", "contaBancaria", "poupanca", "corretoraDeInvestimentos"],
    {
      errorMap: () => ({ message: "Selecione um tipo de conta válido." }),
    }
  ),
  description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
})

export type CreateAccountFormData = z.infer<typeof createAccountFormSchema>
