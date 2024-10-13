import { styled } from "styled-components";

export const ChartContainer = styled.div`
  max-width: 854px;
  min-height: 444px;
  margin: auto;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryGray};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 20rem;
    overflow-x: auto;
  }
`
