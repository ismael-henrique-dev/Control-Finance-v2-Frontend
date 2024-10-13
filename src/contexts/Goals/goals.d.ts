export interface Goal {
  Id: string
  Title: string
  Value: number
  CreatedAt: string
  CompletedAt: string | null
  EndTime: string
  userId: string
  TargetedValue: number
}

export interface GoalList {
  unCompletedGoals: Goal[]
  ExpiredGoals: Goal[]
  CompletedGoals: Goal[]
}

export interface GoalsContextType {
  fetchGoals: () => Promise<void>
  createGoal: (data: CreateGoalFormData) => Promise<void>
  NewDepositOfGoal: (goalId: string, depositValue: number) => Promise<void>
  completeGoal: (goalId: string) => Promise<void>
  deleteGoal: (goalId: string) => Promise<void>
  updateGoal: (goalId: string, data: UpdateGoalFormData) => Promise<void>
  goalsList: GoalList
  goalsArrayList: Goal[]
  isLoadingGoals: boolean
}
