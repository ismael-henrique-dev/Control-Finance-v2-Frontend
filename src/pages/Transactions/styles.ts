import { styled } from 'styled-components'

export const TransactionsContainer = styled.div`
  /* max-width: 68rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 2rem 4rem;
  margin: 2rem auto;
  gap: 2rem;

   @media (max-width: 768px) {
    & {
      padding: 0 1rem;
    }
  }
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
  flex-direction: column;
  gap: 2rem;
  /* max-width: 64rem; */
  width: 100%;

  @media (max-width: 768px) {
    /* width: 20rem; */
    padding: 0 1rem;
    margin: auto;
  }

  strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    width: 100%;
  }

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`
