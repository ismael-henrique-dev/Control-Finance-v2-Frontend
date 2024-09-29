import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { CreateGoalFormData } from "../schemas/CreateGoalFormSchema"
import { UpdateGoalFormData } from "../schemas/UpdateGoalFormSchema"

interface GoalsContextType {
  fetchGoals: () => Promise<void>
  createGoal: (data: CreateGoalFormData) => Promise<void>
  NewDepositOfGoal: (goalId: string, depositValue: number) => Promise<void>
  completeGoal: (goalId: string) => Promise<void>
  deleteGoal: (goalId: string) => Promise<void>
  updateGoal: (goalId: string, data: UpdateGoalFormData) => Promise<void>
  goalsList: Goal[]
}

interface GoalsProviderProps {
  children: ReactNode
}

interface Goal {
  Id: string
  Title: string
  Value: number
  CreatedAt: string
  CompletedAt: string
  EndTime: string
  userId: string
  TargetedValue: number
}

interface GoalListProps {
  unCompletedGoals: Goal[]
  ExpiredGoals: Goal[]
  CompletedGoals: Goal[]
}

export const GoalsContext = createContext({} as GoalsContextType)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goalsList, setGoalsList] = useState<Goal[]>([])

  async function createGoal(goalData: CreateGoalFormData) {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.post("/goals/create", goalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  async function fetchGoals() {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.get("/goals", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      setGoalsList([
        ...data.unCompletedGoals,
        ...data.ExpiredGoals,
        ...data.CompletedGoals,
      ])
      console.log(goalsList)
    } catch (errr) {
      console.log(errr)
    }
  }

  useEffect(() => {
    fetchGoals()
  }, [])

  async function NewDepositOfGoal(goalId: string, depositValue: number) {
    try {
      const token = localStorage.getItem("@token")
      await api.put(
        `/goals/value/${goalId}/${depositValue}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      console.log(goalId, depositValue)
    } catch (error) {
      console.error(error)
    }
  }

  async function completeGoal(goalId: string) {
    try {
      const token = localStorage.getItem("@token")
      await api.put(
        `/goals/complete/${goalId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    } catch (error) {
      console.error(error)
    }
  }

  async function updateGoal(goalId: string, data: UpdateGoalFormData) {
    try {
      const token = localStorage.getItem("@token")
      await api.put(`/goals/update/${goalId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteGoal(goalId: string) {
    try {
      const token = localStorage.getItem("@token")
      await api.delete(`/goals/delete/${goalId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const newGoalList = goalsList.filter((goal) => goal.Id !== goalId)
      setGoalsList(newGoalList)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GoalsContext.Provider
      value={{
        goalsList,
        fetchGoals,
        createGoal,
        NewDepositOfGoal,
        completeGoal,
        deleteGoal,
        updateGoal,
      }}
    >
      {children}
    </GoalsContext.Provider>
  )
}
