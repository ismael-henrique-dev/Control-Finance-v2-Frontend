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
