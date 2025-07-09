import styled from 'styled-components'

export const SeparatorContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 0.75rem;
  color: ${(props) => props.theme.primary};
  width: 100%;

  &::before,
  &::after {
    content: '';
    width: 100%;
    border-bottom: 2px solid ${(props) => props.theme.primary};
  }
`
