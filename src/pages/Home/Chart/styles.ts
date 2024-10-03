import { styled } from "styled-components"

export const ChartContainer = styled.div`
  width: 20rem;
  height: 15rem;
  background-color: ${(props) => props.theme.primaryGray};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
`

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
`

export const LegendItem = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;

  span {
    color: ${(props) => props.theme.text};
    margin-right: 2rem;
    max-width: 4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};

    &:last-child {
      cursor: pointer;
      background-color: ${(props) => props.theme.terciaryGray};
    }
  }

  &:last-child {
    cursor: pointer;
  }
`
