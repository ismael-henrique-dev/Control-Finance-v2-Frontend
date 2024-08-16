import styled from "styled-components"
import Modal from "@mui/material/Modal"

export const ModalGlobal = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  /* height: 6rem; */
  background-color: ${(props) => props.theme.primary};
  padding: 1rem 1.25rem;
  gap: 1.5rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.white};
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.875rem;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: ${(props) => props.theme.white};

    input {
      flex: 1;
      background-color: transparent;
      border: 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: ${(props) => props.theme.white};
    }
  }
`

export const ModalContainer = styled.section`
  width: 30rem;
  min-height: 23.75rem;
  background-color: ${(props) => props.theme.green};
  border-radius: 12px;
`
