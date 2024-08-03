import styled from "styled-components";

export const ContainerSearchBarTransaction = styled.div`
  border-radius: 12px;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: start;
  justify-content: start;
  color: ${(props) => props.theme.secundary};
  background-color: ${(props) => props.theme.primaryGray};
  padding: 1.5rem 1.25rem;
  max-width: 15rem;
  height: 5.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 3px solid ${(props) => props.theme.secundary};
    padding: 0.5rem 0;
  }

  input {
    width: 9rem;
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    
  }

  input::placeholder {
    color: ${(props) => props.theme.secundary};
    font-size: 1rem;
    font-weight: 500;
  }
`;