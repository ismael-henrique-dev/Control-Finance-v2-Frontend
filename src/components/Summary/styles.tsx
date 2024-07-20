import styled from "styled-components"

export const ContainerSummary = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1.25rem;
  background-color: ${(props) => props.theme.primaryGray};
  margin: 24px;
  gap: 1.5rem;
  border-radius: 12px;
  flex-wrap: wrap;
`

interface TransactionTypeVariants {
  variant: "total" | "income" | "outcome"
}

export const TransactionType = styled.div<TransactionTypeVariants>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => {
      switch (props.variant) {
        case "income":
          return props.theme.green
        case "outcome":
          return props.theme.red
        default:
          return props.theme.secundary
      }
    }};

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  span {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) => {
      switch (props.variant) {
        case "income":
          return props.theme.green
        case "outcome":
          return props.theme.red
        default:
          return props.theme.secundary
      }
    }};
  }
`
