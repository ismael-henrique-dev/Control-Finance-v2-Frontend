import { z } from "zod"

export const updateGoalFormSchema = z.object({
  Title: z.string(),
  TargetedValue: z.number(),
  Value: z.number(),
  EndTime: z.string().transform((value) => new Date(value)),
})

export type UpdateGoalFormData = z.infer<typeof updateGoalFormSchema>
