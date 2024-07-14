import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.primaryGray};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  gap: 8rem;

  img {
    width: 11rem;
    height: 1.5rem;
  }

  @media (max-width: 768px) {
    & {
      gap: 1rem;
      padding: 0.5rem;
    }

    img {
      width: 9rem;
    }
  }
`

export const InputArea = styled.div`
  border-radius: 12px;
  background-color: ${(props) => props.theme.colors.secundaryGray};
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

  div {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.colors.text};
    flex: 1;
    line-height: 0.5;
    font-size: 1rem;

    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 768px) {
    & {
      display: none;
    }
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

  button:first-child {
    display: none;
  }

  button {
    background-color: ${(props) => props.theme.colors.secundaryGray};
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
    background-color: ${(props) => props.theme.colors.secundaryGray};
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

  @media (max-width: 768px) {
    & {
      gap: 1rem;
    }

    button:first-child {
      display: flex;
    }

    a {
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 100%;
    }

    span {
      display: none;
    }
  }
`

const BaseStyle = styled.button`
  background-color: ${(props) => props.theme.colors.secundaryGray};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
`

export const ToggleThemeButton = styled.button`
  background-color: ${(props) => props.theme.colors.secundaryGray};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
`
