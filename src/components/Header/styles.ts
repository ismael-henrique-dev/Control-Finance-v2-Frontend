import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.gray_1};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  gap: 8rem;
`

export const InputArea = styled.div`
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text};
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex: 1;

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  input {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    flex: 1;
    /* height: 1.25rem; */
    line-height: 0.5;
    font-size: 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.colors.text};
    font-size: 1rem;
    font-weight: 500;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  button {
    background-color: ${(props) => props.theme.colors.gray_2};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    width: 2.5rem;
    height: 2.5rem;
  }

  a {
    background-color: ${(props) => props.theme.colors.gray_2};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    border: 0;
    height: 2.5rem;
    gap: 0.75rem;
    text-decoration: none;
    padding: 0.75rem 0.5rem;
    font-weight: 500;
  }

  button:hover,
  a:hover {
    cursor: pointer;
  }
`

const BaseStyle = styled.button`
  background-color: ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
`

export const ToggleThemeButton = styled.button`
  background-color: ${(props) => props.theme.colors.gray_2};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
`
