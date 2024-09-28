import { z } from "zod"

export const createAccountFormSchema = z.object({
  Name: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  Value: z.number(),
  Type: z.enum(
    ["Carteira", "ContaBancaria", "Poupanca", "CorretoraDeInvestimentos"],
    {
      errorMap: () => ({ message: "Selecione um tipo de conta válido." }),
    }
  ),
  Description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
})

export type CreateAccountFormSchema = z.infer<typeof createAccountFormSchema>
