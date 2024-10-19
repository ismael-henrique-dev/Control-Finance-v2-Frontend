import Modal from "@mui/material/Modal"
import styled from "styled-components"

export const ModalStyled = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  background-color: ${(props) => props.theme.primaryGray};
  width: 50%;
  height: 80%;
  min-height: 20rem;
  padding: 1.25rem;
  border-radius: 12px;
  display: flex;

  flex-direction: column;
  gap: 0.75rem;

  header {
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;

    button {
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      align-items: center;
      justify-content: center; 
      background-color: transparent;
      border: 0;
      font-size: 1rem;
      color: ${(props) => props.theme.text};
      cursor: pointer;
    }
  }

  p {
    color: ${(props) => props.theme.text};
    text-align: center;
    margin-top: 0.875rem;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    overflow-y: scroll;
    padding: 0 1rem;
  }

  @media (max-width: 768px) {
    & {
      height: 100%;
      width: 100%;
      border-radius: 0;
      flex: 1;
      header {
        button {
          /* width: 50px; */
        }
      }
    }
  }
`

export const InputAreaFunctional = styled.div`
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
  }

  input {
    background-color: transparent;
    border: 0;
    color: ${(props) => props.theme.text};
    flex: 1;
    /* height: 1.25rem; */
    line-height: 0.5;
    font-size: 1rem;
  }

  input::placeholder {
    color: ${(props) => props.theme.text};
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
  }
`

export const SuggestionArea = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.terciaryGray};
      font-weight: 300;
      font-size: 0.875rem;
    }

    a {
      text-decoration: none;
      color: ${(props) => props.theme.secundary};
    }
  }

  ul {
    display: inline-flex;
    flex-direction: column;
    gap: 0.75rem;

    /* @media (min-width: 768px) {
      max-height: 120px;
      overflow-y: scroll;
      padding: 0%.5rem;
    } */
  }
`

export const Suggestion = styled.li`
  background-color: ${(props) => props.theme.secundaryGray};
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;
  flex: 1;

  &:hover {
    transition: all 0.3s;
    opacity: 0.6;
  }

  svg {
    color: ${(props) => props.theme.secundary};
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;

    span {
      border-radius: 8px;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${(props) => props.theme.primaryGray};

      svg {
        width: 1rem;
        height: 1rem;
      }
    }
  }
`
