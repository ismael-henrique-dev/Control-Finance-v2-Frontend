import styled from "styled-components";

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
`;

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
`;

export const MainContainer = styled.main`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;
  min-width: 64rem;
  /* min-height: 100vh; */

  @media (max-width: 768px) {
    & {
      justify-content: center;
    }
  }
`;
