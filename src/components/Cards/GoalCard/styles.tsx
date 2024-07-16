import styled from "styled-components"
import LinearProgress from "@mui/material/LinearProgress"

export const ContainerCard = styled.div`
  border-radius: 12px;
  width: 20rem;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  padding: 1.5rem;
  gap: 1rem;

  header {
    width: 100%;
    display: flex;

    div {
      display: flex;
      gap: 0.75rem;
    }

    svg {
      color: ${(props) => props.theme.secundary};
      font-size: 2rem;
    }
  }

  span {
    color: ${(props) => props.theme.terciaryGray};
  }

  strong {
    color: ${(props) => props.theme.text};
    font-weight: 600;
  }

  section {
    width: 100%;

    strong {
      display: flex;
      color: ${(props) => props.theme.secundary};
      margin-bottom: 0.75rem;
    }
  }
`

export const BarLinearProgress = styled(LinearProgress)`
  &.MuiLinearProgress-root {
    height: 1.25rem; /* altura da barra de progresso */
    border-radius: 12px; /* borda arredondada */
  }
  & .MuiLinearProgress-bar {
    background-color: ${(props) =>
      props.theme.secundary}; /* cor da barra de progresso */
    border-radius: 0; /* borda arredondada da barra de progresso */
  }
  &.MuiLinearProgress-colorPrimary {
    background-color: ${(props) =>
      props.theme.secundaryGray}; /* cor do fundo da barra */
  }
`

export const HomeSummary = styled.div`
width: 20rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
  
  section {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }
`

export const MainBalance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  strong {
    color: ${(props) => props.theme.secundary};
    font-weight: 600;
    font-size: 2rem;
  }

  span {
    color: ${(props) => props.theme.terciaryGray};
    font-weight: 600;
    font-size: 0.875rem;
  }
`

interface TypeTransactionIconProps {
  variant: "income" | "outcome"
}

export const TypeTransaction = styled.div<TypeTransactionIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.variant === "income" ? props.theme.green : props.theme.red};
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) =>
      props.variant === "income" ? props.theme.green : props.theme.red};
    font-weight: 600;
    font-size: 1.25rem;
  }
`
