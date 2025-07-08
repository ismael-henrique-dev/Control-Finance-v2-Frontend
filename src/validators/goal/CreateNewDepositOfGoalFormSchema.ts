import { z } from "zod"

export const createNewDepositOfGoalFormSchema = z.object({
  DepositValue: z.number(),
})

export type CreateNewDepositOfGoalFormData = z.infer<typeof createNewDepositOfGoalFormSchema>
