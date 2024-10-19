import { z } from "zod"

export const createGoalFormSchema = z.object({
  EndTime: z.string().transform((value) => new Date(value)),
  Title: z.string().min(3, "O nome dever conter pelo menos 03 letras."),
  TargetedValue: z.number().min(1),
  Value: z.number().min(0),
})

export type CreateGoalFormData = z.infer<typeof createGoalFormSchema>
