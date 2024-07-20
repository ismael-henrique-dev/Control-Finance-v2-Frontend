import styled from "styled-components"

export const AuthContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 4rem;
  gap: 2rem;

  strong {
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.terciaryGray};

    span {
      cursor: pointer;
      color: ${(props) => props.theme.secundary};
      font-weight: 500;
    }
  }

  button {
    border: 0;
    background-color: ${(props) => props.theme.secundary};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${(props) => props.theme.white};
    font-size: 0.875rem;
    font-weight: 500;
    width: 20rem;
    height: 2rem;
    border-radius: 12px;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    & {
      top: 10%;
      transform: translate(-50%, 0%);
    }
  }
`
