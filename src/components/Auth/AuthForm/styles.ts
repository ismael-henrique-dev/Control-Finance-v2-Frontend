import styled from "styled-components"

export const AuthContainer = styled.div`
  width: 20rem;
  text-align: start;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  gap: 1.125rem; /* 18px */

  form {
    display: flex;
    flex-direction: column;
    gap: 1.125rem;

    button[type="submit"] {
      margin-top: 1.125rem;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    font-weight: 400;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1.125rem; /* 18px */
  }

  span {
    color: ${(props) => props.theme.text};
  }
`

interface ButtonProps {
  variant?: "default" | "goToWithGoogle" | "visitMode"
}

export const Button = styled.button<ButtonProps>`
  width: 20rem;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;

  color: ${(props) => {
    switch (props.variant) {
      case "goToWithGoogle":
        return props.theme.invertColor
      case "visitMode":
        return props.theme.text
      default:
        return props.theme.white
    }
  }};

  border-radius: 12px;
  border: 0;
  background-color: ${(props) => {
    switch (props.variant) {
      case "goToWithGoogle":
        return props.theme.text
      case "visitMode":
        return props.theme.secundaryGray
      default:
        return props.theme.secundary
    }
  }};

  svg,
  img {
    margin-right: 0.5rem;
    width: 1.5rem;
    height: 1.5rem;
  }
`

export const Divisory = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.primary};

  &::before,
  &::after {
    content: "";
    width: 8.5rem;
    border-bottom: 2px solid ${(props) => props.theme.primary};
  }
`
