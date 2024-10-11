import { z } from "zod"

export const updateAccountFormSchema = z.object({
  Name: z
    .string()
    .min(3, "O nome deve conter no mínimo 03 caracteres.")
    .max(50, "O nome deve conter no máximo 50 caracteres."),
  Description: z
    .string()
    .min(10, "A descrição deve conter no mínimo 10 caracteres."),
  Type: z.enum(
    ["Carteira", "ContaBancaria", "Poupanca", "CorretoraDeInvestimentos"],
    {
      errorMap: () => ({ message: "Selecione um tipo de conta válido." }),
    }
  ),
})

export type UpdateAccountFormSchema = z.infer<typeof updateAccountFormSchema>
