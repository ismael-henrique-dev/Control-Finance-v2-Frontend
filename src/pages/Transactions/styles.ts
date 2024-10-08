import { styled } from "styled-components"

export const TransactionsContainer = styled.div`
  max-width: 68rem;
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
  flex-wrap: wrap;

  @media (max-width: 768px) {
    & {
      justify-content: center;
      flex-direction: column-reverse;
    }
  }
`

export const MainContainer = styled.main`
  display: flex;
  justify-content: start;
  /* align-items: center; */
  flex-direction: column;
  /* flex-wrap: wrap; */
  gap: 2rem;
  max-width: 64rem;

  @media (max-width: 768px) {
    width: 20rem;
    margin: auto;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`
