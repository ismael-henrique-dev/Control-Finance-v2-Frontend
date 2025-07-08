import { z } from "zod"

export const updateGoalFormSchema = z.object({
  Title: z.string().optional(),
  Value: z.number().optional(),
  TargetedValue: z.number().optional(),
  EndTime: z.date().optional(),
})


export type UpdateGoalFormData = z.infer<typeof updateGoalFormSchema>
