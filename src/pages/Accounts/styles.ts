import styled from 'styled-components'
import LinearProgress from '@mui/material/LinearProgress'

export const AccountsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 2rem auto;
  gap: 2rem;
  width: 100%;
  padding: 2rem 4rem;

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
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: safe;
  max-width: 64rem;

  @media (max-width: 768px) {
    /* min-height: 100vh; */
    justify-content: center;
    padding: 0;
    margin: auto;
  }
`

export const LinearProgressCustom = styled(LinearProgress)`
  width: 64rem;
  background-color: #fff;

  .MuiLinearProgress-bar {
    background-color: ${(props) => props.theme.secundary};
  }

  @media (max-width: 768px) {
    & {
      align-items: start;
      width: 20rem;
      margin: auto;
    }
  }
`
