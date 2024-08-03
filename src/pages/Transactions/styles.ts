import { styled } from "styled-components";

export const ContainerTransactions = styled.div`
  max-width: 64rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 0;
  margin: 2rem auto;
  gap: 2rem;
`;

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

export const MainContainer = styled.main`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  gap: 2rem;

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
`;
