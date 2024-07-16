import styled from "styled-components"

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem 0; /* alterar dps */
`

export const ContainerDefault = styled.div`
  width: 100%;
  max-width: 72rem;
  display: flex;
  align-items: center;
  margin: auto;

  header {
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
  }
`
