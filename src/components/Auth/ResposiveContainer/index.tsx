import { ReactNode } from "react"
import { ContainerResposive, MainContainer } from "./styles"

interface ResposiveContainerAuthProps {
  children: ReactNode
}

export function ResposiveContainerAuth({children}: ResposiveContainerAuthProps) {
  return (
    <MainContainer>
      <ContainerResposive>{children}</ContainerResposive>
    </MainContainer>
  )
}
