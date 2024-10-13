import styled from "styled-components"

export const ContainerSearchBarTransaction = styled.div`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: ${(props) => props.theme.secundary};
  background-color: ${(props) => props.theme.primaryGray};
  padding: 1rem 1rem;

  @media (max-width: 768px) {
    & {
      width: 20rem;
    }
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 3px solid ${(props) => props.theme.secundary};
    padding: 0.5rem 0;
    flex: 1;
  }

  input {
    flex: 1;
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.secundary};
    font-size: 1rem;

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  input::placeholder {
    color: ${(props) => props.theme.secundary};
    font-size: 1rem;
    font-weight: 500;
  }
`
