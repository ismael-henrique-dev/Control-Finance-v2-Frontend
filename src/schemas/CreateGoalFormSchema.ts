import { z } from "zod"

export const createGoalFormSchema = z.object({
  EndTime: z.string().transform((value) => new Date(value)),
  Title: z.string(),
  TargetedValue: z.number(),
  Value: z.number(),
})

export type CreateGoalFormData = z.infer<typeof createGoalFormSchema>
