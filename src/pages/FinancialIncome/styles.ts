import styled from "styled-components";

export const FinancialIncomeContainer = styled.main`
  max-width: 64rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction: column; */
  
  padding: 0;
  margin: 2rem auto;
  gap: 2rem;
  /* min-height: 80vh; */

  @media (max-width: 768px) {
    flex-direction: column;
  }

  section > strong {
    font-size: 1.5rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 2rem;
  }
`

export const ResponsiveContainerPage = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
`