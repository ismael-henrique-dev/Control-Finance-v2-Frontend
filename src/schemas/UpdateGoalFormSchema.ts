import { z } from "zod"

export const updateGoalFormSchema = z.object({
  Title: z.string(),
  Value: z.number(),
  TargetedValue: z.number(),
  EndTime: z.string().transform((value) => new Date(value)),
})


export type UpdateGoalFormData = z.infer<typeof updateGoalFormSchema>
