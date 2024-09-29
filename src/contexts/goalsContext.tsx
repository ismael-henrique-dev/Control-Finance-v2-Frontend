import { createContext, ReactNode, useEffect, useState } from "react"
import { api } from "../services/api"
import { CreateGoalFormData } from "../schemas/CreateGoalFormSchema"

interface GoalsContextType {
  fetchGoals: () => Promise<void>
  createGoal: (data: CreateGoalFormData) => Promise<void>
  NewDepositOfGoal: (goalId: string, depositValue: number) => Promise<void>
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
      setGoalsList((prevGoals) => [
        ...prevGoals,
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

  return (
    <GoalsContext.Provider
      value={{ goalsList, fetchGoals, createGoal, NewDepositOfGoal }}
    >
      {children}
    </GoalsContext.Provider>
  )
}
