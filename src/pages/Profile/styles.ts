import styled from "styled-components"

export const ResponsiveContainerPage = styled.div`
  min-height: 80vh;
  display: flex;
  align-items: center;
`

export const ProfileContainer = styled.div`
  max-width: 50.75rem;
  background-color: ${(props) => props.theme.primaryGray};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2.5rem;
  margin: 2rem auto;
  flex-wrap: wrap;
  border-radius: 12px;  
`

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  /* justify-content: center;  */
`

export const ContainerInputs = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`

export const ContainerInput = styled.div`
  background-color: ${(props) => props.theme.secundaryGray};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-top: 0.5rem;
  border-radius: 8px;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: ${(props) => props.theme.secundary};
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    input {
      background-color: transparent;
      border: none;
      color: ${(props) => props.theme.text};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`

export const ContainerButtonsForm = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
`

interface ButtonVariants {
  variant?: "purple" | "red"
}

export const Button = styled.button<ButtonVariants>`
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  color: ${(props) => props.theme.white};
  border-radius: 8px;
  cursor: pointer;
  border: 0;

  background-color: ${(props) => {
    switch (props.variant) {
      case "purple":
        return props.theme.secundary
      case "red":
        return props.theme.red
      default:
        return props.theme.secundaryGray
    }
  }};
`

export const Label = styled.label`
  font-size: 0.875rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
  margin-bottom: -1.5rem;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Card = styled.div`
  width: 20rem;
  background-color: ${(props) => props.theme.secundaryGray};
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  padding: 1rem;
  gap: 1rem;
  border-radius: 12px;

  p {
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    font-weight: 400;
  }
`
