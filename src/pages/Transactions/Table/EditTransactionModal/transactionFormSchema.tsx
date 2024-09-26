import { z } from "zod";

export const editTransactionFormSchema = z.object({
  Title: z.string(),
  Value: z.number(),
  Type: z.enum(["DEP", "SAL"]),
  Categories: z.string()
})

export type EditTransactionFormSchema = z.infer<typeof editTransactionFormSchema>