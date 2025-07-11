import styled from 'styled-components'
import Modal from '@mui/material/Modal'

export const ModalOverlay = styled(Modal)`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  background-color: ${(props) => props.theme.primary};
  padding: 1rem 1.25rem;
  gap: 1.5rem;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;

  @media (max-width: 768px) {
    width: 20rem;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.white};
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
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

export const ModalContainer = styled.div`
  width: 30rem;
  height: auto;
  background-color: ${(props) => props.theme.primaryGray};
  border-radius: 12px;

  @media (max-width: 768px) {
    width: 20rem;
  }
`

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  gap: 1.25rem;

  @media (max-width: 768px) {
    width: 20rem;

    button {
      width: 17rem;
    }
  }
`
