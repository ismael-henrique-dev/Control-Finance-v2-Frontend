import { ReactNode } from "react"
import { ResposiveContainer, MainContainer } from "./styles"

interface AuthResposiveContainerProps {
  children: ReactNode
}

export function AuthResposiveContainer({ children }: AuthResposiveContainerProps) {
  return (
    <MainContainer>
      <ResposiveContainer>{children}</ResposiveContainer>
    </MainContainer>
  )
}
