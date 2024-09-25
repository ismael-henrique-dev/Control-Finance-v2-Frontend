import { z } from "zod";

export const createTransactionFormSchema = z.object({
  Title: z.string(),
  Value: z.number(),
  // CreatedAt: z.date().optional(),
  Type: z.enum(["DEP", "SAL"]),
  AccountId: z.string(),
  Categories: z.string()
})

export type CreateTransactionFormSchema = z.infer<typeof createTransactionFormSchema>