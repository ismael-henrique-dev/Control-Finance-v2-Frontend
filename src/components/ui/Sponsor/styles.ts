import { styled } from 'styled-components'

export const SponsorContainer = styled.div`
  text-align: center;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6rem 1.5rem;
  gap: 1rem;
  border-radius: 12px;
  background-color: ${(props) => props.theme.secundaryGray};
  color: ${(props) => props.theme.text};

  @media (max-width: 1024px) {
    padding: 2rem;
  }
`
