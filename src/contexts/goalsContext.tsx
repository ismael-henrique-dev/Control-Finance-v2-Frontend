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
  goalsList: GoalList
  isLoadingGoals: boolean
}

interface GoalsProviderProps {
  children: ReactNode
}

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

interface GoalList {
  unCompletedGoals: Goal[]
  ExpiredGoals: Goal[]
  CompletedGoals: Goal[]
}

export const GoalsContext = createContext({} as GoalsContextType)

export function GoalsProvider({ children }: GoalsProviderProps) {
  const [goalsList, setGoalsList] = useState<GoalList>({
    unCompletedGoals: [],
    ExpiredGoals: [],
    CompletedGoals: [],
  })
  const [isLoadingGoals, setIsLoadingGoals] = useState(false)

  async function createGoal(goalData: CreateGoalFormData) {
    try {
      setIsLoadingGoals(true)
      const token = localStorage.getItem("@token")
      const { data } = await api.post("/goals/create", goalData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const newGoal: Goal = {
        ...data.CreatedGoal,
      }

      setGoalsList((prevGoals) => ({
        ...prevGoals,
        unCompletedGoals: [...prevGoals.unCompletedGoals, newGoal],
      }))
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoadingGoals(false)
    }
  }

  async function fetchGoals() {
    const token = localStorage.getItem("@token")

    if (token) {
      try {
        setIsLoadingGoals(true)

        const { data } = await api.get("/goals", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        setGoalsList({
          unCompletedGoals: data.unCompletedGoals,
          ExpiredGoals: data.ExpiredGoals,
          CompletedGoals: data.CompletedGoals,
        })
        console.log(goalsList)
      } catch (errr) {
        console.log(errr)
      } finally {
        setIsLoadingGoals(false)
      }
    }
  }

  useEffect(() => {
    fetchGoals()
  }, [])

  async function NewDepositOfGoal(goalId: string, depositValue: number) {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.put(
        `/goals/value/${goalId}/${depositValue}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      const goalUpdated = { ...data.updatedGoal }

      setGoalsList((prevGoals) => ({
        ...prevGoals,
        unCompletedGoals: prevGoals.unCompletedGoals.map((goal) =>
          goal.Id === goalUpdated.Id ? goalUpdated : goal
        ),
      }))
    } catch (error) {
      console.error(error)
    }
  }

  async function completeGoal(goalId: string) {
    try {
      const token = localStorage.getItem("@token")
      const { data } = await api.put(
        `/goals/complete/${goalId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      setGoalsList((prevGoals) => {
        const completedGoal = prevGoals.unCompletedGoals.find(
          (goal) => goal.Id === goalId
        )

        if (!completedGoal) return prevGoals

        return {
          ...prevGoals,
          unCompletedGoals: prevGoals.unCompletedGoals.filter(
            (goal) => goal.Id !== goalId
          ),
          CompletedGoals: [
            ...prevGoals.CompletedGoals,
            {
              ...completedGoal,
              CompletedAt: data.CompletedAt,
              Value: completedGoal.TargetedValue,
            } as Goal,
          ],
        }
      })
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

      setGoalsList((prevGoals) => ({
        ...prevGoals,
        unCompletedGoals: prevGoals.unCompletedGoals.filter(
          (goal) => goal.Id !== goalId
        ),
        ExpiredGoals: prevGoals.ExpiredGoals.filter(
          (goal) => goal.Id !== goalId
        ),
        CompletedGoals: prevGoals.CompletedGoals.filter(
          (goal) => goal.Id !== goalId
        ),
      }))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <GoalsContext.Provider
      value={{
        isLoadingGoals,
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
