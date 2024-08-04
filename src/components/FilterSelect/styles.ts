import styled from "styled-components"

export const ContainerFilterSelect = styled.div`
  width: 10rem;
  height: 5.5rem;
  background-color: ${(props) => props.theme.primaryGray};
  color: ${(props) => props.theme.secundary};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    border-bottom: 3px solid ${(props) => props.theme.secundary};
    padding: 0.5rem 0;
  }
`
