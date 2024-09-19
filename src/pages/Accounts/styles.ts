import styled from "styled-components"
import LinearProgress from "@mui/material/LinearProgress"

export const AccountsContainer = styled.div`
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0;
  margin: 2rem auto;
  gap: 2rem;
  min-height: 100vh;
`

export const ContainerBarSummary = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap-reverse;

  @media (max-width: 768px) {
    & {
      justify-content: center;
      flex-direction: column-reverse;
    }
  }
`

export const Section = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 600;
    font-size: 1.5rem;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    width: 20rem;
    margin: auto;
  }
`

export const MainContainer = styled.main`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 64rem;
  /* max-width: 64rem; */
  /* min-height: 100vh; */

  @media (max-width: 768px) {
    & {
      min-width: 320px;
      justify-content: center;
    }
  }
`

export const LinearProgressCustom = styled(LinearProgress)`
  width: 64rem;
  flex: 1;
  background-color: #fff;

  .MuiLinearProgress-bar {
    background-color: ${props => props.theme.secundary};
  }

  @media (max-width: 768px) {
    & {
      width: 20rem;
      margin: auto;
    }
  }
`
