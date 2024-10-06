import { styled } from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ProfilePic = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  border-radius: 50%;
  background-color: #ccc;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const Input = styled.input`
  display: none;
`

export const Label = styled.label`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme.secundary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
    width: 1rem;
    height: 1rem;
  }
`

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`