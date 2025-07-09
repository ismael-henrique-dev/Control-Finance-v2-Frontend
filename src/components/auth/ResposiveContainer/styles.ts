import { styled } from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 20rem;

  @media (max-width: 768px) {
    padding: 0 0;
    /* flex: 1; */
  }
  @media (min-width: 768px) {
    /* padding: 0 0; */
    height: 100vh;
    /* flex: 1; */
  }
`

export const ResposiveContainer = styled.main`
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  align-items: center;
  justify-content: center;
  flex: wrap;
  gap: 2.5rem;
  padding: 8rem 4rem;
  border-radius: 12px;
  flex: 1;
  height: 100%;
  flex-direction: row;
  flex: 1;

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
    /* width: 100%; */
  }
`
