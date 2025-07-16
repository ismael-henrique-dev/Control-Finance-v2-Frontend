import { styled } from 'styled-components'

export const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (max-width: 768px) {
    height: auto;
  }
`

export const SignUpRegisterContent = styled.div`
  border-radius: 12px;
  background-color: ${(props) => props.theme.primaryGray};
  padding: 4rem;
  width: 100%;
  max-width: 1024px;
  gap: 1.5rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 3rem 2rem;
    flex-direction: column;
  }
`
