import styled from "styled-components";

export const FinancialIncomeContainer = styled.main`
  max-width: 64rem;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 2rem auto;
  gap: 2rem;

  section > strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${props => props.theme.text};
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }
`