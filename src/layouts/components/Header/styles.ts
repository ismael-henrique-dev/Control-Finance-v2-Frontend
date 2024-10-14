import styled from "styled-components"

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.primaryGray};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  gap: 4rem;

  img {
    width: 11rem;
    height: 1.5rem;
  }

  svg {
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 768px) {
    & {
      gap: 2rem;
      padding: 0.5rem;
    }

    img {
      width: 9rem;
    }
  }
`

export const InputArea = styled.div`
  border-radius: 12px;
  background-color: ${(props) => props.theme.secundaryGray};
  color: ${(props) => props.theme.text};
  height: 2.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  flex: 1;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme.text};
  }

  div {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.text};
    flex: 1;
    line-height: 0.5;
    font-size: 1rem;

    span {
      color: ${(props) => props.theme.text};
      font-size: 1rem;
      font-weight: 500;
    }
  }

  @media (max-width: 1000px) {
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
    background-color: ${(props) => props.theme.secundaryGray};
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 0;
    width: 40px;
    height: 40px;
  }

  a {
    background-color: ${(props) => props.theme.secundaryGray};
    color: ${(props) => props.theme.text};
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
    flex: 1;
  }

  button:hover,
  a:hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
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

export const ToggleThemeButton = styled.button`
  background-color: ${(props) => props.theme.secundaryGray};
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
`
