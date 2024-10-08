import { styled } from "styled-components";

export const ContainerInput = styled.div`
  background-color: ${(props) => props.theme.secundaryGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 8px;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme.secundary};
  }
  
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.text};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`
