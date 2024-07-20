import { styled } from "styled-components"

export const InputElement = styled.input`
  width: 3rem;
  height: 3rem;
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 8px 0px;
  border-radius: 8px;
  outline: none;
  text-align: center;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme.secundary};
  border: none;

  &:hover {
  }

  &:focus {
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
