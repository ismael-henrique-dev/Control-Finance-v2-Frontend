import styled from "styled-components"

export const AccountCardConatiner = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryGray};
  padding: 1.5rem;
  border-radius: 12px;
  width: 20rem;
  gap: 1.25rem;

  strong {
    font-weight: 600;
    font-size: 1.25rem;
    color: ${(props) => props.theme.secundary};
  }

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;

    strong {
      font-weight: 600;
      font-size: 1.5rem;
      color: ${(props) => props.theme.text};
    }

    div {
      display: flex;
      gap: 0.75rem;
      align-items: center;

      svg {
        font-size: 1.5rem;
        color: ${(props) => props.theme.secundary};
      }
    }
  }
`

export const ActionsArea = styled.section`
  display: flex;
  gap: 0.75rem;
`

export const AccountSummary = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

interface SummaryTypeProps {
  variant: "income" | "outcome"
}

export const SummaryType = styled.div<SummaryTypeProps>`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 500;
  }

  svg,
  span {
    color: ${(props) =>
      props.variant === "income" ? props.theme.green : props.theme.red};
    font-size: 1rem;
    font-weight: 500;
  }
`

export const ButtonAdd = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 50%;
  background-color: ${(props) => props.theme.secundary};
  color: ${(props) => props.theme.white};
`
