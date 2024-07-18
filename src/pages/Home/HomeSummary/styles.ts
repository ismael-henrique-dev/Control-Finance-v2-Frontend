import { styled } from "styled-components"

export const HomeSummary = styled.div`
  width: 20rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
  }
`

export const MainBalance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;

  strong {
    color: ${(props) => props.theme.secundary};
    font-weight: 600;
    font-size: 2rem;
  }

  span {
    color: ${(props) => props.theme.terciaryGray};
    font-weight: 600;
    font-size: 0.875rem;
  }
`

interface TypeTransactionIconProps {
  variant: "income" | "outcome"
}

export const TypeTransaction = styled.div<TypeTransactionIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.variant === "income" ? props.theme.green : props.theme.red};
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) =>
      props.variant === "income" ? props.theme.green : props.theme.red};
    font-weight: 600;
    font-size: 1.25rem;
  }
`
