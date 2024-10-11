import { createContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { CreateGoalFormData } from "../../schemas/goal/CreateGoalFormSchema"
import { UpdateGoalFormData } from "../../schemas/goal/UpdateGoalFormSchema"
import { useLoadingStates } from "../../hooks/useLoadingStates"
import { token } from "../../constants"
import { apiWithToken } from "../../functions"
import { ProviderProps } from "../../@types/context"
import { Goal, GoalList, GoalsContextType } from "./goals"

export const GoalsContext = createContext({} as GoalsContextType)

export function GoalsProvider({ children }: ProviderProps) {
  const { isLoadingGoals, setIsLoadingGoals } = useLoadingStates()
  const [goalsList, setGoalsList] = useState<GoalList>({
    unCompletedGoals: [],
    ExpiredGoals: [],
    CompletedGoals: [],
  })

  async function createGoal(goalData: CreateGoalFormData) {
    try {
      setIsLoadingGoals(true)

      const { data } = await api.post(
        "/goals/create",
        goalData,
        apiWithToken(token)
      )

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
    if (token) {
      try {
        setIsLoadingGoals(true)

        const { data } = await api.get("/goals", apiWithToken(token))
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
      const { data } = await api.put(
        `/goals/value/${goalId}/${depositValue}`,
        {},
        apiWithToken(token)
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
      const { data } = await api.put(
        `/goals/complete/${goalId}`,
        {},
        apiWithToken(token)
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
      await api.put(`/goals/update/${goalId}`, data, apiWithToken(token))
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteGoal(goalId: string) {
    try {
      await api.delete(`/goals/delete/${goalId}`, apiWithToken(token))

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
