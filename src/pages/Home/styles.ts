import styled from "styled-components"

export const HomeContainer = styled.div`
  max-width: 74rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem auto; /* alterar dps */

  @media (max-width: 768px) {
  }
`

export const ContainerDefault = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  flex-direction: column;

  main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    gap: 2rem;
    flex-wrap: wrap;
  }
`

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  margin-bottom: 0.75rem;

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
    
  }
`
