import styled from "styled-components"

export const HomeContainer = styled.div`
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 2rem auto; /* alterar dps */
  /* flex-wrap: wrap; */
  gap: 2rem;

  @media (max-width: 768px) {
  }
`

interface DefaultContainerProps {
  content: "center" | "start"
}

export const DefaultContainer = styled.div<DefaultContainerProps>`
  display: flex;

  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    & {
      margin: auto;
    }
  }
`

export const EstatisticCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  strong {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.secundary};
    font-size: 1.25rem;
  }

  @media (max-width: 768px) {
    width: 20rem;
    margin: auto;
  }
`
