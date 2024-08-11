import styled from "styled-components"

export const CardStatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  background-color: ${(props) => props.theme.primaryGray};
  border-radius: 12px;
  min-width: 304px;

  p {
    color: ${(props) => props.theme.text};
    font-weight: 400;
    font-size: 0.875rem;
    max-width: 15rem;
    text-align: center;
  }
`

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const Status = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex: 1;
  gap: 1rem;

  & > svg {
    color: ${(props) => props.theme.green};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.secundary};

    span {
      font-weight: 500;
      font-size: 0%.875rem;
    }
  }
`
