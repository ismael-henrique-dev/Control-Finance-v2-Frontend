import { styled } from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContainerResposive = styled.main`
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  align-items: center;
  flex: wrap;
  gap: 2.5rem;
  padding: 4rem 8rem;
  border-radius: 12px;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-weight: 400;
  }

  span {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
