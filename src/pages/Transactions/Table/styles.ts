import styled from "styled-components"

export const ContainerTable = styled.div`
  width: 100%;
  max-width: 1214px;
  display: flex;

  @media (max-width: 600px) {
    overflow-x: scroll;
    width: 20rem;
  }
`

export const TransactionsTable = styled.table`
  background-color: transparent;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  font-size: 0.875rem;
  font-weight: 600;
  min-width: 100px;

  thead {
    tr {
      th {
        text-align: left;
        padding: 1.25rem 2rem;
        color: ${(props) => props.theme.white};
        background-color: ${(props) => props.theme.secundary};

        &:first-child {
          border-top-left-radius: 12px;
          width: 35%;
        }

        &:last-child {
          border-top-right-radius: 12px;
        }
      }
    }
  }

  tbody {
    tr {
      margin-top: 4px;
      background-color: ${(props) => props.theme.primaryGray};
      td {
        padding: 1.25rem 2rem;
        font-size: 0.875rem;
        font-weight: 400;
        color: ${(props) => props.theme.terciaryGray};
        white-space: nowrap;

        .icon-text {
          display: flex;
          align-items: center;

          svg {
            margin-right: 0.5rem;
            width: 1.25rem;
            height: 1.25rem;
          }
        }

        &:first-child {
          width: 35rem;
        }

        &:last-child {
          padding: 1.25rem 1rem;
        }
      }
    }
  }

  tfoot {
    background-color: ${(props) => props.theme.primaryGray};

    tr {
      &:first-child {
        border-bottom-left-radius: 12px;
      }
      &:last-child {
        border-bottom-right-radius: 12px;
      }

      td {
        padding: 1.25rem 2rem;
        white-space: nowrap;

        section {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-left: 2rem;
        }
      }
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme.terciaryGray};
    }
  }
`

interface ButtonVariant {
  variant?: "more" | "nav"
}

export const Button = styled.button<ButtonVariant>`
  width: 1.75rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.variant === "more" ? props.theme.secundaryGray : props.theme.primary};
  border: none;
  color: ${(props) =>
    props.variant === "more" ? props.theme.text : props.theme.white};
  border-radius: 6px;
  padding: 6px;
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const NavContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`
