import { styled } from "styled-components"

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 100vh;
  }
`

export const ResposiveContainer = styled.main`
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: wrap;
  gap: 2.5rem;
  padding: 4rem 4rem;
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
    padding: 4rem 2rem;
    width: 100%;
  }
`
