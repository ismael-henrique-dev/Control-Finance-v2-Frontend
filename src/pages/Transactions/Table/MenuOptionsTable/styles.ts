import { styled } from "styled-components";

export const Container = styled.div``

export const Actions = styled.div`
  width: 2rem;
  height: auto;
  border-radius: 8px;
  background-color: ${(props) => props.theme.secundaryGray};
  overflow: hidden;
  border: none;
  outline: none;
  box-shadow: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.5rem;

  button {
    cursor: pointer;
    background-color: transparent;
    border: 0;

    svg {
      width: 1rem;
      height: 1rem;

      color: ${(props) => props.theme.text};
    }

    &:last-child {
      color: ${(props) => props.theme.red};
    }
  }
`

export const PopoverStyle = {
  pointerEvents: "auto",
  ".MuiPopover-paper": {
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "none",
  },
}
