import { z } from "zod";

export const createTransactionFormSchema = z.object({
  Title: z.string(),
  Value: z.number(),
  CreatedAt: z.date(),
  Type: z.enum(["DEP", "SAL"]),
})