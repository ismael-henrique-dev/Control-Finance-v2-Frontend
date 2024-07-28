import styled from "styled-components";

export const ContainerButton = styled.button`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) => props.theme.primaryGray};
  color: ${(props) => props.theme.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
`;
