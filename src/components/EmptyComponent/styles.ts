import styled from "styled-components";

export const EmptyComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;

  p {
    color: ${props => props.theme.secundary};
    font-size: 3rem;
    font-weight: 300;
    text-align: center;
  }
`