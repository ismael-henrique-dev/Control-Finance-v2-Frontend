import { styled } from 'styled-components'

export const HomeSummary = styled.div`
  flex: 1;
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
    align-items: start;
    width: 100%;
  }
`

// export const MainBalance = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   margin: auto;

//   strong {
//     font-weight: 600;
//     font-size: 2rem;
//     color: ${(props) => props.theme.secundary};
//   }

//   span {
//     color: ${(props) => props.theme.terciaryGray};
//     font-weight: 600;
//     font-size: 0.875rem;
//   }
// `

type TypeTransactionIconProps = {
  variant: 'income' | 'outcome' | 'total'
}

export const TransactionType = styled.div<TypeTransactionIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${(props) => {
      switch (props.variant) {
        case 'income':
          return props.theme.green
        case 'outcome':
          return props.theme.red
        case 'total':
          return props.theme.primary
        default:
          return props.theme.primary
      }
    }};
    color: ${(props) => props.theme.white};
  }

  span {
    color: ${(props) => {
      switch (props.variant) {
        case 'income':
          return props.theme.green
        case 'outcome':
          return props.theme.red
        case 'total':
          return props.theme.primary
        default:
          return props.theme.primary
      }
    }};
    font-weight: 600;
    font-size: 1.25rem;
  }
`
